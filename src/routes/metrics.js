const metricsHandler = (req, res, requestCount) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`# HELP http_requests_total Total HTTP requests
# TYPE http_requests_total counter
http_requests_total ${requestCount}

# HELP app_uptime_seconds Application uptime in seconds
# TYPE app_uptime_seconds gauge
app_uptime_seconds ${process.uptime()}

# HELP nodejs_memory_usage_bytes Node.js memory usage
# TYPE nodejs_memory_usage_bytes gauge
nodejs_memory_usage_bytes{type="rss"} ${process.memoryUsage().rss}
nodejs_memory_usage_bytes{type="heapUsed"} ${process.memoryUsage().heapUsed}
nodejs_memory_usage_bytes{type="heapTotal"} ${process.memoryUsage().heapTotal}
nodejs_memory_usage_bytes{type="external"} ${process.memoryUsage().external}
`);
};

module.exports = metricsHandler;