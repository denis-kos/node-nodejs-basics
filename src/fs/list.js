import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  if (!fs.existsSync(path.join(__dirname, 'files'))) throw new Error('FS operation failed');

  fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err) throw new Error('FS operation failed');
    console.log(files);
  });
};

await list();
