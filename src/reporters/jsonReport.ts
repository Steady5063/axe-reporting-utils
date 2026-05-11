import { AxeResults } from 'axe-core';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

/**
 * Writes the raw axe-core JSON results to a file.
 *
 * @param results The axe-core scan results.
 * @param folderPath Folder path where the JSON file should be written.
 * @param fileName Name of the JSON file.
 */
export function logJsonReport(results: AxeResults, folderPath: string, fileName: string): void {
  const outputPath = join(folderPath, fileName);

  try {
    mkdirSync(folderPath, { recursive: true });
    writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  } catch (error) {
    throw new Error(`Failed to write JSON report to ${outputPath}: ${error}`);
  }
}
