const gracefulShutdown = (server, signal) => {
  console.log(`Received ${signal}, shutting down gracefully`);
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
};

module.exports = {
  gracefulShutdown
};