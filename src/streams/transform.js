import { Transform } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _encoding, callback) {
      callback(null, String(chunk).split('').reverse().join('') + '\n');
    }
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
