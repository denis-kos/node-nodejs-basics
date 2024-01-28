import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const file = path.join(__dirname, 'files', 'fileToCompress.txt');
  const readStream = fs.createReadStream(file);
  const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
