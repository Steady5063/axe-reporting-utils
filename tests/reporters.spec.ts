import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';
import { axeConsoleLogger, axeTextReport, axeJsonReport } from '../dist/index.js';
const path = require('path');
const { unlinkSync, existsSync, readFileSync } = require('fs');

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

    const reportPath = path.join(__dirname, 'axe-report.txt');

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

    const reportPath = path.join(__dirname, 'axe-report.json');
    axeJsonReport(violations, __dirname, 'axe-report.json');

    expect(existsSync(reportPath)).toBe(true);

    const content = readFileSync(reportPath, 'utf8');
    expect(JSON.parse(content)).toEqual(violations);

    unlinkSync(reportPath);
  });
});