# Axe Reporting Utils

A library for generating various reports from axe-core accessibility scan results.

## Installation
NOT YET PUBLISHED TO NPM
```bash
npm install axe-reporting-utils
```

## Usage

```typescript
import { logViolations, logReport } from 'axe-reporting-utils';

// Assuming you have axe-core results
const results = await axe.run(document);

// Log to console
logViolations(results);

// Write detailed report to file
logReport(results, './axe-report.txt');
```

## API

### `logViolations(results: AxeResults): void`

Logs axe-core violations to the console.

- `results`: The axe-core scan results object.

### `logReport(results: AxeResults, filePath: string): void`

Writes a detailed axe-core report to a text file, including violations and incomplete results.

- `results`: The axe-core scan results object.
- `filePath`: The path where the report file should be saved.
