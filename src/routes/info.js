const environment = process.env.NODE_ENV || 'development';

const infoHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    platform: process.platform,
    architecture: process.arch,
    node_version: process.version,
    memory_usage: process.memoryUsage(),
    environment: environment,
    pid: process.pid,
    uptime: process.uptime()
  }, null, 2));
};

module.exports = infoHandler;