const http = require('http');
const router = require('./routes');
const { gracefulShutdown } = require('./utils/shutdown');

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

// Enhanced Web Server
const server = http.createServer((req, res) => {
  router(req, res);
});

// Graceful shutdown handlers
process.on('SIGTERM', () => gracefulShutdown(server, 'SIGTERM'));
process.on('SIGINT', () => gracefulShutdown(server, 'SIGINT'));

// Start server
server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
  console.log(`Environment: ${environment}`);
  console.log(`Node.js version: ${process.version}`);
});

// Export server for testing
module.exports = server;