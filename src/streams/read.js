import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const file = path.join(__dirname, 'files', 'fileToRead.txt');
  const readStream = fs.createReadStream(file);

  readStream.on('data', data => process.stdout.write(data));
};

await read();
