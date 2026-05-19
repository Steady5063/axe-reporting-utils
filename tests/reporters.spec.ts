/// <reference types="node" />
import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';
import { axeConsoleLogger, axeTextReport, axeJsonReport, axeSummaryReport } from '../dist/index.js';
import path from 'path';
import { unlinkSync, existsSync, readFileSync } from 'fs';

test.describe('Axe Reporting Utils', () => {
  test('should test a website with logger reporter', async ({ page }) => {
    await page.goto('https://www.w3schools.com');
    await injectAxe(page);

    const violations = await page.evaluate(async () => {
      const results = await (window as any).axe.run();
      return results;
    });

    axeConsoleLogger(violations);

    expect(violations).toBeDefined();
    expect(Array.isArray(violations.violations)).toBe(true);
  });

  test('should test a website with logReport reporter', async ({ page }) => {

    await page.goto('https://www.w3schools.com');
    await injectAxe(page);

    const violations = await page.evaluate(async () => {
      const results = await (window as any).axe.run();
      return results;
    });

    const reportPath = path.join(process.cwd(), 'tests', 'axe-report.txt');

    axeTextReport(violations, reportPath);
    expect(existsSync(reportPath)).toBe(true);

    unlinkSync(reportPath);
  });

  test('should write axe results to a JSON report file', async ({ page }) => {
    await page.goto('https://www.w3schools.com');
    await injectAxe(page);

    const violations = await page.evaluate(async () => {
      const results = await (window as any).axe.run();
      return results;
    });

    const reportPath = path.join(process.cwd(), 'tests', 'axe-report.json');
    axeJsonReport(violations, path.join(process.cwd(), 'tests'), 'axe-report.json');

    expect(existsSync(reportPath)).toBe(true);

    const content = readFileSync(reportPath, 'utf8');
    expect(JSON.parse(content)).toEqual(violations);

    unlinkSync(reportPath);
  });

  test('should write a summary HTML report from multiple axe scans', async () => {
    const sampleResults = [
      {
        url: 'https://example.com/page1',
        timestamp: new Date().toISOString(),
        violations: [
          {
            id: 'color-contrast',
            impact: 'critical',
            description: 'Elements must have sufficient color contrast',
            help: 'Ensure the contrast ratio between text and background is sufficient',
            helpUrl: 'https://dequeuniversity.com/rules/axe/4.8/color-contrast',
            nodes: [
              {
                html: '<p style="color: #777; background: #fff">Example</p>',
                target: ['p'],
                failureSummary: 'Text has insufficient color contrast.',
              },
            ],
            tags: [],
          },
        ],
        passes: [],
        incomplete: [],
        inapplicable: [],
      },
      {
        url: 'https://example.com/page2',
        timestamp: new Date().toISOString(),
        violations: [
          {
            id: 'image-alt',
            impact: 'serious',
            description: 'Image elements must have alternate text',
            help: 'Add alternative text to all meaningful images',
            helpUrl: 'https://dequeuniversity.com/rules/axe/4.8/image-alt',
            nodes: [
              {
                html: '<img src="logo.png">',
                target: ['img'],
                failureSummary: 'Image element missing alt attribute.',
              },
            ],
            tags: [],
          },
        ],
        passes: [],
        incomplete: [],
        inapplicable: [],
      },
    ];

    const summaryPath = path.join(process.cwd(), 'tests', 'axe-summary-report.html');

    axeSummaryReport(sampleResults as any, summaryPath);

    expect(existsSync(summaryPath)).toBe(true);
    const content = readFileSync(summaryPath, 'utf8');
    expect(content).toContain('Axe Summary Report');
    expect(content).toContain('Generated at:');
    expect(content).toContain('<h2>Total scans</h2>');
    expect(content).toContain('<h2>Total issue types</h2>');
    expect(content).toContain('<h2>Total affected nodes</h2>');
    expect(content).toContain('https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/accessibility-icon.png');
    expect(content).toContain('<strong>2</strong>');
    expect(content).toContain('<td>critical</td>');
    expect(content).toContain('<td>serious</td>');
    expect(content).toContain('<td>moderate</td>');
    expect(content).toContain('<td>minor</td>');
  

    unlinkSync(summaryPath);
  });
});