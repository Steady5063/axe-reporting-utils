import { AxeResults } from 'axe-core';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const IMPACT_LEVELS = ['critical', 'serious', 'moderate', 'minor'] as const;
type ImpactLevel = (typeof IMPACT_LEVELS)[number];

type ImpactCounts = Record<ImpactLevel, number>;

function normalizeImpact(value: string | null | undefined): ImpactLevel | null {
  const normalized = typeof value === 'string' ? value.toLowerCase() : null;
  return normalized && IMPACT_LEVELS.includes(normalized as ImpactLevel)
    ? (normalized as ImpactLevel)
    : null;
}

function createImpactCounts(): ImpactCounts {
  return {
    critical: 0,
    serious: 0,
    moderate: 0,
    minor: 0,
  };
}

function aggregateResults(results: AxeResults[]): {
  totalViolations: number;
  totalNodes: number;
  totalScans: number;
  impactBreakdown: ImpactCounts;
  perScanSummaries: Array<{
    scanIndex: number;
    url: string;
    violations: number;
    nodes: number;
    impactCounts: ImpactCounts;
  }>;
} {
  const impactBreakdown = createImpactCounts();
  const perScanSummaries = results.map((result, index) => {
    const counts = createImpactCounts();
    let scanNodes = 0;

    // Only count violations (skip incomplete) and only aggregate recognized impacts
    result.violations.forEach(violation => {
      const impact = normalizeImpact(violation.impact);
      if (impact) {
        counts[impact] += 1;
        impactBreakdown[impact] += 1;
      }
      scanNodes += violation.nodes.length;
    });

    return {
      scanIndex: index + 1,
      url: result.url || `Scan ${index + 1}`,
      violations: result.violations.length,
      nodes: scanNodes,
      impactCounts: counts,
    };
  });

  const totalViolations = perScanSummaries.reduce((sum, summary) => sum + summary.violations, 0);
  const totalNodes = perScanSummaries.reduce((sum, summary) => sum + summary.nodes, 0);

  return {
    totalViolations,
    totalNodes,
    totalScans: results.length,
    impactBreakdown,
    perScanSummaries,
  };
}

function renderImpactRow(label: string, count: number): string {
  return `<tr><td>${label}</td><td>${count}</td></tr>`;
}

function buildHtmlReport(results: AxeResults[], generatedAt: string): string {
  const { totalScans, totalViolations, totalNodes, impactBreakdown, perScanSummaries } = aggregateResults(results);

  const impactRows = IMPACT_LEVELS.map(level => renderImpactRow(level, impactBreakdown[level])).join('');
  const scanRows = perScanSummaries.map(summary => {
    const impactColumns = IMPACT_LEVELS.map(level => `<td>${summary.impactCounts[level]}</td>`).join('');
    return `<tr>
      <td>${summary.scanIndex}</td>
      <td>${summary.url}</td>
      <td>${summary.violations}</td>
      <td>${summary.nodes}</td>
      ${impactColumns}
    </tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Axe Summary Report</title>
  <style>
    :root {
      color-scheme: light;
      color: #111;
      background: #ffffff;
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 32px;
      background: #f5f6f8;
      color: #111;
    }

    .page-shell {
      max-width: 1100px;
      margin: 0 auto;
      background: #fff;
      border-radius: 24px;
      box-shadow: 0 24px 60px rgba(10, 20, 40, 0.08);
      overflow: hidden;
      border: 1px solid #e4e7ed;
    }

    header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 32px 40px;
      background: linear-gradient(135deg, #081014 0%, #14212e 100%);
      color: #fff;
    }

    .report-branding {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .report-logo {
      width: 64px;
      height: 64px;
      object-fit: contain;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.08);
      padding: 8px;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    h1 {
      margin: 0;
      font-size: 2.4rem;
      letter-spacing: -0.04em;
    }

    p.meta {
      margin: 0;
      opacity: 0.85;
      color: #d4f7d4;
    }

    .summary-card {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      padding: 28px 40px 40px;
      background: #fbfbfc;
      border-bottom: 1px solid #e6e9ef;
    }

    .summary-card .metric {
      border-radius: 18px;
      background: #ffffff;
      border: 1px solid #e3e7ec;
      padding: 24px;
      box-shadow: 0 7px 22px rgba(16, 24, 40, 0.06);
    }

    .metric h2 {
      margin: 0 0 8px;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #6b7280;
    }

    .metric strong {
      display: block;
      margin-top: 8px;
      font-size: 2.1rem;
      color: #0f5132;
    }

    .content {
      padding: 24px 40px 40px;
    }

    h2.section-title {
      margin: 0 0 16px;
      font-size: 1.2rem;
      color: #111;
    }

    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin-bottom: 32px;
      background: #fff;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06);
    }

    thead {
      background: #f3f6fa;
    }

    th,
    td {
      padding: 16px;
      text-align: left;
      border-bottom: 1px solid #e9edf2;
      color: #111;
    }

    th {
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #475569;
    }

    tbody tr:hover {
      background: rgba(16, 185, 129, 0.04);
    }

    tbody tr:last-child td {
      border-bottom: none;
    }

    .impact-label {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.75rem;
      border-radius: 999px;
      font-size: 0.88rem;
      letter-spacing: 0.02em;
      background: #eefcf3;
      color: #0f5132;
    }

    .impact-critical { color: #bb1f1f; }
    .impact-serious { color: #b45309; }
    .impact-moderate { color: #15803d; }
    .impact-minor { color: #0f766e; }

    .note {
      margin-top: 8px;
      font-size: 0.95rem;
      color: #4b5563;
    }
  </style>
</head>
<body>
  <div class="page-shell">
    <header>
      <div class="report-branding">
        <div>
          <h1>Axe Summary Report</h1>
          <p class="meta">Generated at: ${generatedAt}</p>
        </div>
      </div>
      <img
        class="report-logo"
        src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/accessibility-icon.png"
        alt=""
      />
    </header>

    <div class="summary-card">
      <div class="metric">
        <h2>Total scans</h2>
        <strong>${totalScans}</strong>
        <p class="note">Number of axe scans included in this report.</p>
      </div>
      <div class="metric">
        <h2>Total issue types</h2>
        <strong>${totalViolations}</strong>
        <p class="note">Unique violations aggregated across all scans.</p>
      </div>
      <div class="metric">
        <h2>Total affected nodes</h2>
        <strong>${totalNodes}</strong>
        <p class="note">Total elements impacted by violations.</p>
      </div>
    </div>

    <div class="content">
      <h2 class="section-title">Impact Breakdown</h2>
      <table>
        <thead>
          <tr><th>Impact</th><th>Issue count</th></tr>
        </thead>
        <tbody>${impactRows}</tbody>
      </table>

      <h2 class="section-title">Per-scan breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Scan #</th>
            <th>URL</th>
            <th>Violations</th>
            <th>Affected nodes</th>
            <th>Critical</th>
            <th>Serious</th>
            <th>Moderate</th>
            <th>Minor</th>
          </tr>
        </thead>
        <tbody>
          ${scanRows}
        </tbody>
      </table>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Writes a summary HTML report that aggregates axe-core scan results across a test run.
 * @param results Array of axe-core scan results from a test run.
 * @param filePath File path where the HTML report should be written.
 */
export function axeSummaryReport(results: AxeResults[], filePath: string): void {
  if (!Array.isArray(results)) {
    throw new Error('axeSummaryReport expects an array of axe-core results.');
  }

  const outputDir = dirname(filePath);

  try {
    mkdirSync(outputDir, { recursive: true });
    writeFileSync(filePath, buildHtmlReport(results, new Date().toISOString()), 'utf8');
  } catch (error) {
    throw new Error(`Failed to write summary report to ${filePath}: ${error}`);
  }
}
