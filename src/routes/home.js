const environment = process.env.NODE_ENV || 'development';

const homeHandler = (req, res, requestCount) => {
  const timestamp = new Date().toISOString();
  
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
        <h1> Node.js DevOps Pipeline, Docker, CI/CD, Kubernetes, Azure </h1>
        <h2>Built by Izuabueke</h2>
        </div>
        <p>This project demonstrates a complete end-to-end DevOps workflow by building and deploying a modern Node.js web application. It covers the full lifecycle of application development, from writing and testing code, to containerizing with Docker, automating pipelines with GitHub Actions, and deploying workloads to Kubernetes environments for both staging and production.

As part of this implementation, the application is also hosted on Azure Web App, showcasing how cloud-native platforms can be leveraged for scalable and reliable application delivery. By combining local development with containerization and CI/CD automation, and extending deployments into Kubernetes clusters and Azure services, this project provides a practical demonstration of modern DevOps practices.</p>

<p>Key features of this project include:

<p>Building a Node.js application with testing (Jest, Supertest) and linting (ESLint).</p>

<p>Containerizing the app using Docker and orchestrating services with Docker Compose.</p>

<p>Automating builds, tests, and deployments with GitHub Actions CI/CD pipelines.</p>

<p>Deploying to Kubernetes clusters for staging and production environments.</p>

<p>Hosting the application on Azure Web App to ensure scalability, availability, and cloud integration.</p>

<p>This project serves as a comprehensive learning resource for understanding how software development integrates with DevOps tools and cloud-native deployment strategies.</p>
        <p>My appreciation goes to my mentor <a href = "https://www.linkedin.com/in/rgmh/"> Raphael Gab-Momoh(MVP) </a> and <a href = "https://www.linkedin.com/in/oladiranolalekan/"> Olalekan OLADIRAN </a> for the time they have invested in sharing their knowledge, providing clarity when things seemed complex, and pushing me to keep improving. Your support has made a real difference, and I am grateful to have learned from such dedicated and inspiring coaches.</p>
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
};

module.exports = homeHandler;