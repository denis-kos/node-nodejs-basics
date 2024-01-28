import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const archive = path.join(__dirname, 'files', 'archive.gz');
  const readStream = fs.createReadStream(archive);
  const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
