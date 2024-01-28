import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const readStream = fs.createReadStream(file);
  const hash = crypto.createHash('sha256');

  readStream.on('data', data => hash.update(data));
  readStream.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();
