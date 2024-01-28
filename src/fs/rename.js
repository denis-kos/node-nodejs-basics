import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const wrongFilename = path.join(__dirname, 'files', 'wrongFilename.txt');
  const properFilename = path.join(__dirname, 'files', 'properFilename.md');
  if (!fs.existsSync(wrongFilename)) throw new Error('FS operation failed');
  if (fs.existsSync(properFilename)) throw new Error('FS operation failed');

  fs.rename(wrongFilename, properFilename, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await rename();
