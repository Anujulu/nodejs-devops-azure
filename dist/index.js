#!/usr/bin/env node
"use strict";
/**
 * Main entry point for the Node.js Azure DevOps application
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Import server configuration
const server = require('./server');
// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});
// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
// Export server for potential testing or external use
exports.default = server;
