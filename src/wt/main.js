import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const numCores = cpus().length;

const performCalculations = async () => {
  const __dirname = fileURLToPath(import.meta.url);
  const __filename = resolve(__dirname, '../worker.js');
  const results = [];

  const createWorker = (data) => {
    return new Promise((resolve, _reject) => {
      
      const worker = new Worker(__filename, { workerData: data });

      worker.on('message', (message) => {
        worker.terminate();
        resolve({ status: 'resolved', data: message });
      });

      worker.on('error', (_error) => {
        worker.terminate();
        resolve({ status: 'error', data: null });
      });
    });
  };

  const sendDataToWorkers = async () => {
    const data = Array.from({ length: numCores }, (_, index) => index + 10);
    const workerPromises = data.map((value) => createWorker(value));
    await Promise.all(workerPromises).then((values) => {
      results.push(...values);
    });

    console.log(results);
  };

  await sendDataToWorkers();
};

await performCalculations();
