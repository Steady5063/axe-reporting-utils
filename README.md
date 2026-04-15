# Axe Reporting Utils

A TypeScript library for generating various reports from axe-core accessibility scan results.

## Installation

```bash
npm install axe-reporting-utils
```

## Usage

```typescript
import { logViolations } from 'axe-reporting-utils';

// Assuming you have axe-core results
const results = await axe.run(document);

logViolations(results);
```

This will log all violations found in the scan to the console, including details like impact, help text, and affected nodes.

## API

### `logViolations(results: AxeResults): void`

Logs axe-core violations to the console.

- `results`: The axe-core scan results object.