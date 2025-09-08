#!/usr/bin/env node

/**
 * Main entry point for the Node.js Azure DevOps application
 */

import * as http from 'http';

// Import server configuration
const server = require('./server');

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Export server for potential testing or external use
export default server;