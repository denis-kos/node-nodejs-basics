import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  const content = 'I am fresh and young';
  if (fs.existsSync(filePath)) throw new Error('FS operation failed');

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });
};

await create();
