# Axe Reporting Utils

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

A comprehensive set of reporting utilities for axe-core accessibility scan results. This package provides multiple ways to output and analyze accessibility violations found by axe-core, making it easier to integrate accessibility testing into your development workflow.

## Features

- **Console Logging**: Quickly log accessibility violations to the console during development
- **Detailed Text Reports**: Generate human-readable text files with full violation details, including HTML snippets and failure summaries
- **JSON Export**: Save raw axe-core results as formatted JSON files for further processing or archival
- **TypeScript Support**: Fully typed for seamless integration with TypeScript projects
- **Zero Dependencies**: Only requires axe-core as a peer dependency

## Installation

**Note: This package is not yet published to npm. Install from source:**

```bash
npm install https://github.com/Steady5063/axe-reporting-utils.git
```

Or clone and build locally:

```bash
git clone https://github.com/Steady5063/axe-reporting-utils.git
cd axe-reporting-utils
npm install
npm run build
```

## Usage

```typescript
import { axeConsoleLogger, axeTextReport, axeJsonReport } from 'axe-reporting-utils';

// Assuming you have axe-core results
const results = await axe.run(document);

// 1. Log violations to console
axeConsoleLogger(results);

// 2. Generate detailed text report
axeTextReport(results, './accessibility-report.txt');

// 3. Export raw JSON data
axeJsonReport(results, './reports', 'axe-results.json');
```

### Example Output

**Console Logger:**
```
Found 3 violation(s):
1. color-contrast: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
   Impact: serious
   Help: Elements must meet minimum color contrast ratio thresholds
   Help URL: https://dequeuniversity.com/rules/axe/4.11/color-contrast
   Nodes affected: 5
---
2. image-alt: Ensure <img> elements have alternate text or a role of none or presentation
   Impact: critical
   Help: Images must have alternate text
   Help URL: https://dequeuniversity.com/rules/axe/4.11/image-alt
   Nodes affected: 2
---
```

**Text Report:** Includes detailed descriptions, HTML snippets, failure summaries, and links to accessibility guidelines for each violation.

**JSON Report:** Complete axe-core results object saved as formatted JSON.

## API Reference

### `axeConsoleLogger(results: AxeResults): void`

Logs a summary of axe-core violations to the console.

- `results`: The axe-core scan results object

### `axeTextReport(results: AxeResults, filePath: string): void`

Generates a comprehensive text report including:
- Report generation timestamp
- Detailed violation descriptions with HTML context
- Failure summaries and help URLs
- Incomplete results (potential issues that need manual review)

- `results`: The axe-core scan results object
- `filePath`: Path where the text report should be saved

### `axeJsonReport(results: AxeResults, folderPath: string, fileName: string): void`

Saves the complete axe-core results as a formatted JSON file.

- `results`: The axe-core scan results object
- `folderPath`: Directory path where the JSON file should be created
- `fileName`: Name of the JSON file to create

## Integration Examples

### With Playwright

```typescript
import { test } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';
import { axeConsoleLogger, axeTextReport } from 'axe-reporting-utils';

test('accessibility check', async ({ page }) => {
  await page.goto('https://example.com');
  await injectAxe(page);

  const results = await page.evaluate(() => axe.run());
  axeConsoleLogger(results);
  axeTextReport(results, './test-results/accessibility-report.txt');
});
```

### With Jest/Puppeteer

```typescript
const puppeteer = require('puppeteer');
const axe = require('axe-core');
const { axeJsonReport } = require('axe-reporting-utils');

describe('Accessibility', () => {
  it('should have no violations', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');

    await page.addScriptTag({ content: axe.source });
    const results = await page.evaluate(() => axe.run());

    axeJsonReport(results, './reports', 'accessibility-scan.json');

    await browser.close();
  });
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

Mark Steadman

## Links

- [GitHub Repository](https://github.com/Steady5063/axe-reporting-utils)
- [Issues](https://github.com/Steady5063/axe-reporting-utils/issues)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
