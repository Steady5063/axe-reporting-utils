import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';
import { logViolations, logReport, logJsonReport } from '../dist/index.js';
import path from 'path';
import { unlinkSync, existsSync, readFileSync } from 'fs';

test.describe('Axe Reporting Utils', () => {
  test('should test a website with logger reporter', async ({ page }) => {
    // Navigate to a test website
    await page.goto('https://www.w3schools.com');

    // Inject axe-core
    await injectAxe(page);

    // Get accessibility violations
    const violations = await page.evaluate(async () => {
      const results = await (window as any).axe.run();
      return results;
    });

    // Test the logger function
    logViolations(violations);

    // Verify that violations were logged
    expect(violations).toBeDefined();
    expect(Array.isArray(violations.violations)).toBe(true);
  });

  test('should test a website with logReport reporter', async ({ page }) => {
    // Navigate to a test website
    await page.goto('https://www.w3schools.com');

    // Inject axe-core
    await injectAxe(page);

    // Get accessibility violations
    const violations = await page.evaluate(async () => {
      const results = await (window as any).axe.run();
      return results;
    });

    // Create a test file path
    const reportPath = path.join(__dirname, 'axe-report.txt');

    // Test the logReport function
    logReport(violations, reportPath);

    // Verify that the report file was created
    expect(existsSync(reportPath)).toBe(true);

    // Clean up
    unlinkSync(reportPath);
  });

  test('should write axe results to a JSON report file', async ({ page }) => {
    await page.goto('https://www.w3schools.com');
    await injectAxe(page);

    const violations = await page.evaluate(async () => {
      const results = await (window as any).axe.run();
      return results;
    });

    const reportPath = path.join(__dirname, 'axe-report.json');
    logJsonReport(violations, __dirname, 'axe-report.json');

    expect(existsSync(reportPath)).toBe(true);

    const content = readFileSync(reportPath, 'utf8');
    expect(JSON.parse(content)).toEqual(violations);

    unlinkSync(reportPath);
  });
});