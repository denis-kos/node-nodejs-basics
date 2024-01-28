import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const newFolder = path.join(__dirname, 'files_copy');
  if (fs.existsSync(newFolder)) throw new Error('FS operation failed');

  const oldFolder = path.join(__dirname, 'files');
  fs.mkdirSync(newFolder);
  fs.readdir(oldFolder, (err, files) => {
    if (err) throw new Error('FS operation failed');
    files.forEach((file) => {
      const filePath = path.join(oldFolder, file);
      const newFilePath = path.join(newFolder, file);
      fs.copyFile(filePath, newFilePath, (err) => {
        if (err) throw new Error('FS operation failed');
      });
    });
  });
};

await copy();
