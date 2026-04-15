import { AxeResults } from 'axe-core';

/**
 * Logs axe-core violations to the console.
 * @param results The axe-core scan results.
 */
export function logViolations(results: AxeResults): void {
  if (results.violations.length === 0) {
    console.log('No violations found.');
    return;
  }

  console.log(`Found ${results.violations.length} violation(s):`);
  results.violations.forEach((violation, index) => {
    console.log(`${index + 1}. ${violation.id}: ${violation.description}`);
    console.log(`   Impact: ${violation.impact}`);
    console.log(`   Help: ${violation.help}`);
    console.log(`   Help URL: ${violation.helpUrl}`);
    console.log(`   Nodes affected: ${violation.nodes.length}`);
    console.log('---');
  });
}