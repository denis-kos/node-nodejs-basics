import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
  const __dirname = fileURLToPath(import.meta.url);
  const __filename = path.resolve(__dirname, '../files/script.js');
  const child = spawn('node', [__filename, ...(Array.isArray(args) ? args : [])], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess([1, 2, 3, 4, 5]);
