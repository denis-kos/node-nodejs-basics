# Node.js Basics

This repository demonstrates fundamental Node.js concepts and provides practical examples of working with various Node.js built-in modules.

## Description

This project is part of the nodejs-assignments course (https://github.com/AlreadyBored/nodejs-assignments) and contains implementations showcasing essential Node.js features including file system operations, streams, child processes, worker threads, hashing, and compression.

## Prerequisites

- Node.js (version 12.x or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/denis-kos/node-nodejs-basics.git
cd node-nodejs-basics
```

2. Install dependencies (if any):
```bash
npm install
```

## Features and Usage

This repository includes the following modules:

### CLI (Command Line Interface)
- **args.js** - Demonstrates parsing command line arguments
  ```bash
  npm run cli:args
  ```
- **env.js** - Shows how to work with environment variables
  ```bash
  npm run cli:env
  ```

### File System Operations
Located in `src/fs/`, these modules demonstrate various file system operations:
- **create.js** - Creating files
  ```bash
  npm run fs:create
  ```
- **read.js** - Reading files
  ```bash
  npm run fs:read
  ```
- **copy.js** - Copying files
  ```bash
  npm run fs:copy
  ```
- **rename.js** - Renaming files
  ```bash
  npm run fs:rename
  ```
- **delete.js** - Deleting files
  ```bash
  npm run fs:delete
  ```
- **list.js** - Listing directory contents
  ```bash
  npm run fs:list
  ```

### Streams
Working with Node.js streams (`src/streams/`):
- **read.js** - Reading data using streams
  ```bash
  npm run streams:read
  ```
- **write.js** - Writing data using streams
  ```bash
  npm run streams:write
  ```
- **transform.js** - Transforming data with streams
  ```bash
  npm run streams:transform
  ```

### Hash
- **calcHash.js** - Calculating file hashes
  ```bash
  npm run hash
  ```

### Child Processes
- **cp.js** - Working with child processes
  ```bash
  npm run cp
  ```

### Worker Threads
- **main.js** - Demonstrating worker threads usage
  ```bash
  npm run wt
  ```

### Compression (ZIP)
- **compress.js** - Compressing files
  ```bash
  npm run zip:compress
  ```
- **decompress.js** - Decompressing files
  ```bash
  npm run zip:decompress
  ```

### ES Modules
- **esm.mjs** - Working with ES modules
  ```bash
  npm run modules
  ```

## Project Structure

```
node-nodejs-basics/
├── src/
│   ├── cli/           # Command line interface examples
│   ├── cp/            # Child processes
│   ├── fs/            # File system operations
│   ├── hash/          # Hashing utilities
│   ├── modules/       # ES modules examples
│   ├── streams/       # Stream operations
│   ├── wt/            # Worker threads
│   └── zip/           # Compression/decompression
├── package.json
└── Readme.md
```

## Learning Objectives

This project helps you understand:
- Node.js file system API
- Working with streams for efficient I/O operations
- Command line argument parsing
- Environment variables handling
- Cryptographic hashing
- Child processes and worker threads for concurrent operations
- File compression and decompression
- ES modules syntax and usage

## License

ISC

## Author

Originally created by AlreadyBored

## Note

This is an educational project. Please don't submit Pull Requests to the original repository.
