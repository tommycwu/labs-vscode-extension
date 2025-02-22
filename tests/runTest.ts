import * as path from 'path';
import * as cp from 'child_process';
import {
  downloadAndUnzipVSCode,
  resolveCliPathFromVSCodeExecutablePath,
  runTests,
} from 'vscode-test';

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');
    const extensionInstallPath = path.resolve(__dirname, '../extensions');

    // The path to test runner
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './suite/index.js');
    const vscodeExecutablePath = await downloadAndUnzipVSCode('1.70.1');
    const cliPath =
      resolveCliPathFromVSCodeExecutablePath(vscodeExecutablePath);

    // Use cp.spawn / cp.exec for custom setup
    cp.spawnSync(
      cliPath,
      [
        '--install-extension',
        'vsls-contrib.codetour',
        '--extensions-dir',
        extensionInstallPath,
      ],
      {
        encoding: 'utf-8',
        stdio: 'inherit',
      }
    );

    // Use cp.spawn / cp.exec for custom setup
    cp.spawnSync(
      cliPath,
      [
        '--install-extension',
        'humao.rest-client',
        '--extensions-dir',
        extensionInstallPath,
      ],
      {
        encoding: 'utf-8',
        stdio: 'inherit',
      }
    );

    // Download VS Code, unzip it and run the integration test
    await runTests({
      vscodeExecutablePath,
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [
        '--extensions-dir',
        extensionInstallPath,
        '--wait-for-extension-ready',
      ],
    });
  } catch (err) {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
