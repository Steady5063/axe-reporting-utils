import { AxeResults } from 'axe-core';
import { writeFileSync } from 'fs';

const LINE_BREAK = '\n\n';
const SECTION_SEPARATOR = `${LINE_BREAK}-------------------------------------------------------------${LINE_BREAK}`;

/**
 * Formats a single violation node into a detailed string.
 */
function formatViolationNode(violation: AxeResults['violations'][0], node: AxeResults['violations'][0]['nodes'][0]): string {
  const selector = node.target.join(', ');
  return `Expected the HTML found at $('${selector}') to have no violations:${LINE_BREAK}` +
         `Issue Description: ${violation.help} (${violation.id})${LINE_BREAK}` +
         `HTML:${LINE_BREAK}${node.html}${LINE_BREAK}` +
         `${node.failureSummary}${LINE_BREAK}` +
         `You can find more information on this issue here: ${LINE_BREAK}${violation.helpUrl}${LINE_BREAK}`;
}

/**
 * Formats all nodes for a violation.
 */
function formatViolation(violation: AxeResults['violations'][0]): string {
  return violation.nodes.map(node => formatViolationNode(violation, node)).join(LINE_BREAK);
}

/**
 * Formats all violations into a single string.
 */
function formatViolations(violations: AxeResults['violations']): string {
  if (violations.length === 0) {
    return '';
  }
  return violations.map(formatViolation).join(SECTION_SEPARATOR);
}

/**
 * Formats a single incomplete node into a detailed string.
 */
function formatIncompleteNode(inc: AxeResults['incomplete'][0], node: AxeResults['incomplete'][0]['nodes'][0]): string {
  const selector = node.target.join(', ');
  return `HTML found at $('${selector}') needs to be reviewed:${LINE_BREAK}` +
         `Issue Description: ${inc.help} (${inc.id})${LINE_BREAK}` +
         `HTML: ${node.html}${LINE_BREAK}` +
         `${node.failureSummary}${LINE_BREAK}` +
         `You can find more information on this issue here: ${LINE_BREAK}${inc.helpUrl}${LINE_BREAK}`;
}

/**
 * Formats all nodes for an incomplete result.
 */
function formatIncomplete(inc: AxeResults['incomplete'][0]): string {
  return inc.nodes.map(node => formatIncompleteNode(inc, node)).join(LINE_BREAK);
}

/**
 * Formats all incomplete results into a single string.
 */
function formatIncompletes(incomplete: AxeResults['incomplete']): string {
  if (incomplete.length === 0) {
    return '';
  }
  return incomplete.map(formatIncomplete).join(SECTION_SEPARATOR);
}

/**
 * Writes axe-core violation results to a text file in a detailed format.
 * @param results The axe-core scan results.
 * @param filePath The path where the log file should be written.
 */
export function logReport(results: AxeResults, filePath: string): void {
  const formattedViolations = formatViolations(results.violations);
  const formattedIncompletes = formatIncompletes(results.incomplete);

  let message = `Report Date: ${new Date().toISOString()}${LINE_BREAK}`;

  if (formattedViolations || formattedIncompletes) {
    message += formattedViolations;
    if (formattedViolations && formattedIncompletes) {
      message += SECTION_SEPARATOR;
    }
    message += formattedIncompletes;
  } else {
    message += 'No violations found!';
  }

  try {
    writeFileSync(filePath, message, 'utf8');
  } catch (error) {
    throw new Error(`Failed to write log report to ${filePath}: ${error}`);
  }
}