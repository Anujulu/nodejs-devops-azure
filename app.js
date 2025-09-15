const http = require('http');
const url = require('url');
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

let requestCount = 0;
const startTime = Date.now();

// Enhanced Web Server
const server = http.createServer((req, res) => {
  requestCount++;
  const timestamp = new Date().toISOString();
  const { pathname } = url.parse(req.url, true);

  console.log(`${timestamp} - ${req.method} ${pathname} - ${req.headers['user-agent'] || 'Unknown'}`);

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Route handling
  switch (pathname) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>DevOps Lab 2025</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; }
            .endpoint { background: #f8f9fa; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #007bff; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1> Node.js, DevOps, Pipeline, Docker, CI/CD, Kubernetes, Azure </h1>
            <h2>Built by Izuabueke</h2>
            </div>
            <p>This project demonstrates a complete end-to-end DevOps workflow by building and deploying a modern <b>Node.js web application</b>. It covers the full lifecycle of application development, from writing and testing code, to containerizing with <b>Docker</b>, automating pipelines with <b>GitHub Actions</b>, and deploying workloads to <b>Kubernetes</b> environments for both staging and production.

As part of this implementation, the application is also <b>hosted on Azure Web App</b>, showcasing how cloud-native platforms can be leveraged for scalable and reliable application delivery. By combining local development with containerization and CI/CD automation, and extending deployments into Kubernetes clusters and Azure services, this project provides a practical demonstration of modern DevOps practices.</p>

<p><b>Key features of this project include:</b> </p>

<p>Building a Node.js application with testing (Jest, Supertest) and linting (ESLint).</p>

<p>Containerizing the app using Docker and orchestrating services with Docker Compose.</p>

<p>Automating builds, tests, and deployments with GitHub Actions CI/CD pipelines.</p>

<p>Deploying to Kubernetes clusters for staging and production environments.</p>

<p>Hosting the application on Azure Web App to ensure scalability, availability, and cloud integration.</p>

<p>This project serves as a comprehensive learning resource for understanding how software development integrates with DevOps tools and cloud-native deployment strategies.</p>
            <p>My appreciation goes to my mentor [Raphael Gab-Momoh(MVP)](https://www.linkedin.com/in/rgmh/) and [Olalekan OLADIRAN](https://www.linkedin.com/in/oladiranolalekan/) for the time they have invested in sharing their knowledge, providing clarity when things seemed complex, and pushing me to keep improving. Your support has made a real difference, and I am grateful to have learned from such dedicated and inspiring coaches.</p>
            <p>Thank you for being part of this journey — I am excited to keep building on what you have taught me.</p>


          <h2>Available Endpoints:</h2>
          <div class="endpoint">
            <strong>GET /</strong> - This welcome page
          </div>
          <div class="endpoint">
            <strong>GET /health</strong> - Health check (JSON)
          </div>
          <div class="endpoint">
            <strong>GET /info</strong> - System information
          </div>
          <div class="endpoint">
            <strong>GET /metrics</strong> - Prometheus metrics
          </div>
          <p>Environment: <strong>${environment}</strong></p>
          <p>Server time: <strong>${timestamp}</strong></p>
          <p>Requests served: <strong>${requestCount}</strong></p>
        </body>
        </html>
      `);
      break;

    case '/health':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: environment,
        version: '1.0.0',
        node_version: process.version,
        requests_served: requestCount
      }, null, 2));
      break;

    case '/info':
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
      break;

    case '/metrics':
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
      break;

    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        error: 'Not Found',
        message: `Route ${pathname} not found`,
        timestamp: new Date().toISOString()
      }, null, 2));
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

// Start server
server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
  console.log(`Environment: ${environment}`);
  console.log(`Node.js version: ${process.version}`);
});

// Export server for testing
module.exports = server;