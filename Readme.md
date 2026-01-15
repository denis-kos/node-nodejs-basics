# Node.js Basics

A comprehensive educational project for learning Node.js fundamentals through hands-on exercises. This repository contains skeleton code for implementing various Node.js core concepts and APIs.

## 📋 Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

## 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/denis-kos/node-nodejs-basics.git
cd node-nodejs-basics
npm install
```

## 📚 Project Structure

This project is organized into modules, each focusing on a specific Node.js concept:

```
src/
├── cli/          # Command-line arguments and environment variables
├── cp/           # Child processes
├── fs/           # File system operations
├── hash/         # Cryptographic hashing
├── modules/      # ES Modules (ESM) and CommonJS (CJS)
├── streams/      # Readable, Writable, and Transform streams
├── wt/           # Worker threads
└── zip/          # File compression and decompression
```

## 🎯 Learning Modules

### 1. CLI (Command Line Interface)

Learn to work with command-line arguments and environment variables.

**Available Scripts:**
- `npm run cli:args` - Parse command-line arguments
- `npm run cli:env` - Read environment variables

**Topics Covered:**
- `process.argv` - Command-line arguments
- `process.env` - Environment variables

### 2. File System Operations

Master Node.js file system API for file and directory operations.

**Available Scripts:**
- `npm run fs:create` - Create new files
- `npm run fs:read` - Read file contents
- `npm run fs:rename` - Rename files
- `npm run fs:delete` - Delete files
- `npm run fs:copy` - Copy files and directories
- `npm run fs:list` - List directory contents

**Topics Covered:**
- `fs` module (promises API)
- File CRUD operations
- Directory operations

### 3. Streams

Work with Node.js streams for efficient data processing.

**Available Scripts:**
- `npm run streams:read` - Read data using Readable streams
- `npm run streams:write` - Write data using Writable streams
- `npm run streams:transform` - Transform data using Transform streams

**Topics Covered:**
- Readable streams
- Writable streams
- Transform streams
- Piping streams

### 4. Hash (Cryptographic Hashing)

Learn to calculate cryptographic hashes of files.

**Available Scripts:**
- `npm run hash` - Calculate hash of a file

**Topics Covered:**
- `crypto` module
- Hash algorithms (SHA256, etc.)
- File hashing

### 5. Worker Threads

Explore multi-threading capabilities in Node.js.

**Available Scripts:**
- `npm run wt` - Perform calculations using worker threads

**Topics Covered:**
- `worker_threads` module
- Parallel processing
- Message passing between threads

### 6. Child Processes

Learn to spawn and manage child processes.

**Available Scripts:**
- `npm run cp` - Spawn child processes

**Topics Covered:**
- `child_process` module
- Spawning processes
- Inter-process communication

### 7. Modules (ESM/CJS)

Understand ES Modules and CommonJS module systems.

**Available Scripts:**
- `npm run modules` - Work with ES Modules

**Topics Covered:**
- ES Modules (ESM)
- CommonJS (CJS)
- Module conversion
- Import/Export syntax

### 8. ZIP Compression

Work with file compression and decompression.

**Available Scripts:**
- `npm run zip:compress` - Compress files using gzip
- `npm run zip:decompress` - Decompress gzip files

**Topics Covered:**
- `zlib` module
- Compression algorithms
- Stream-based compression

## 💻 Usage

Each module contains skeleton code with `// Write your code here` comments. Your task is to implement the required functionality based on the module's learning objectives.

### Example Workflow

1. Choose a module to work on (e.g., `src/fs/read.js`)
2. Open the file and implement the function
3. Run the corresponding npm script to test your implementation:
   ```bash
   npm run fs:read
   ```
4. Iterate until the functionality works as expected

## 🧪 Testing Your Implementation

Run individual module scripts to test your implementations:

```bash
# Test CLI arguments parsing
npm run cli:args

# Test file reading
npm run fs:read

# Test stream operations
npm run streams:read

# Test worker threads
npm run wt
```

## 📖 Learning Resources

- [Node.js Official Documentation](https://nodejs.org/docs/)
- [Node.js API Reference](https://nodejs.org/api/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🤝 Contributing

This is an educational project. If you're a student working on these exercises, please implement the solutions yourself to maximize learning.

## 📄 License

ISC

## 👨‍💻 Author

alreadybored

---

**Note:** This repository is part of the [nodejs-assignments](https://github.com/AlreadyBored/nodejs-assignments) collection.
