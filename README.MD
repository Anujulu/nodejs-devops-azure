My DevOps Project – Node.js, Docker, CI/CD, and Kubernetes
This project demonstrates how to build a modern Node.js web application, containerize it with Docker, set up CI/CD with GitHub Actions, and deploy to staging and production using Kubernetes.

1. Prerequisites
Install these tools before starting:

Node.js (v18 or higher)
Download LTS (20.x as of 2025): https://nodejs.org/
Verify installation:
      node --version    # Should show v18.x+ or v20.x+
      npm --version     # Should show 9.x+ or 10.x+
Git
Download: https://git-scm.com/downloads

Verify installation:

    git --version      # Should show 2.34+ 
Docker Desktop
Download: https://www.docker.com/products/docker-desktop/

Verify installation:

    docker --version          # Should show 24.x+
    docker-compose --version
 
GitHub Account
Sign up at: https://github.com
Code Editor (Optional)
Visual Studio Code recommended
2. Project Setup
Configure Git

  git config --global user.name "Your Name"
  git config --global user.email "you@example.com"
  git config --global init.defaultBranch main
Create Project Folder

  mkdir my-devops-project
  cd my-devops-project
  git init
3. Build the Node.js Web App
Initialize Project

  npm init -y
This creates a package.json. Update it as follows:

    {
        "name": "my-devops-project",
        "version": "1.0.0",
        "description": "DevOps learning project with Node.js",
        "main": "app.js",
        "scripts": {
            "start": "node app.js",
            "test": "jest",
            "dev": "node app.js",
            "lint": "eslint ."
        },
        "keywords": ["devops", "nodejs", "docker"],
        "author": "Your Name",
        "license": "MIT",
        "engines": { "node": ">=18.0.0" },
        "devDependencies": {
            "jest": "^29.7.0",
            "eslint": "^8.57.0",
            "supertest": "^7.1.4"
        }
    }
Create Application File

  # Create the main application file
  touch app.js
Copy the app.js code into this file.

Install Dependencies

  npm install --save-dev jest eslint supertest
  npm install
4. Testing Setup
Create Test Folder and File

  # Create a folder for your tests
  mkdir tests
  # Create the main test file
  touch tests/app.test.js
Copy the test code into this file.

Create Jest Config

  # Create Jest configuration file
  touch jest.config.js
Copy the Jest Configt code into this file.

  module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/tests/**/*.test.js'],
  verbose: true
    };
5. CI/CD with GitHub Actions
Create workflow folder and file:

  # Create the GitHub Actions directory structure
  mkdir -p .github/workflows
  # Create the workflow file
  touch .github/workflows/ci.yml
Copy the pipeline code into this file

6. Docker Configuration
Create Dockerfile

  # Create the Dockerfile (no extension needed)
  touch Dockerfile
Copy the Dockerfile code into this file.

Create .dockerignore

What this file does: Tells Docker which files to ignore when building the container image (similar to .gitignore).

How to create the file:

  # Create Docker ignore file
  touch .dockerignore
Copy this content into .dockerignore

node_modules 
npm-debug
.log* 
.git
.github 
.env 
.env.
local 
.env.*
.local 
logs *
.log 
coverage .nyc_output .vscode .idea *.swp .swo .DS_Store Thumbs.db README.md tests/ jest.config.js .eslintrc

Create .gitignore What this file does: Tells Git which files to ignore and not track in version control (like temporary files, dependencies, etc.).

How to create the file:

  touch .gitignore
Copy this content into .gitignore

(Dependencies node_modules/ npm-debug.log* *.pid .seed .pid.lock coverage/ .nyc_output .env .env.local .env..local logs *.log .vscode/ .idea/ *.swp *.swo .DS_Store Thumbs.db)

Create environment template
What this file does: Shows other developers what environment variables your application needs, without exposing actual secrets.

How to create the file:

  # Create environment template file
  touch .env.example  
Copy this content into .env.example

Create ESLint configuration
What this file does: Configures ESLint to check your JavaScript code for errors and maintain consistent coding style.

How to create the file:

  # Create ESLint configuration file
  touch .eslintrc.js  
Copy this content into .eslintrc.js

7. Development with Docker Compose
What this step does: Creates a Docker Compose file that makes it easy to run your application and any supporting services (like databases) with a single command.

  # Create Docker Compose configuration file
  touch docker-compose.yml
Copy the [docker-compose.yml code](https://github.com/Anujulu/my-devops-project/blob/main/docker-compose.yml)
into this file.

8. Running the App
Local Run

  # Install all dependencies from package.json (including latest versions)
  npm install
  # Run your test suite to make sure everything works
  npm test
  # Start the application server
  npm start
Test endpoints:

  # In a new terminal window, test the endpoints:
  curl http://localhost:3000/         # Homepage
  curl http://localhost:3000/health   # Health check JSON
  curl http://localhost:3000/info     # System info JSON
  curl http://localhost:3000/metrics  # Prometheus metrics
Docker Run
  # Build image
  docker build -t my-devops-app:latest .
  # Run container
  docker run -d -p 3000:3000 --name my-devops-container my-devops-app:latest
  # Check container status
  docker ps
  
  # Test health check
  curl http://localhost:3000/health

  # Stop container
  docker stop my-devops-container
  docker rm my-devops-container
Docker Compose Run
What these commands do: Use Docker Compose to manage multiple services together with a single command.

  # Start all services defined in docker-compose.yml
  docker-compose up -d
  # View real-time logs from all services
  docker-compose logs -f
  # Stop all services and clean up
  docker-compose down
  
9. CI/CD with Deployment
Initial commit

What this does: Takes a snapshot of all your files and saves it in Git history.

How to commit your code:

  # Add all files to Git staging area
  git add .

  # Create your first commit with a descriptive message
  git commit -m "Initial commit: Complete DevOps setup with working CI/CD"
Connect to GitHub

What this step does: Links your local Git repository to a remote GitHub repository and uploads your code.

How to connect and push:

  # Set main as the default branch
  git branch -M main

  # Connect to your GitHub repository (replace yourusername with your actual GitHub username)
  git remote add origin https://github.com/yourusername/my-devops-project.git

  # Push your code to GitHub for the first time
  git push -u origin main
  
10. Kubernetes Deployments
Create environment folders:

  mkdir -p k8s/staging k8s/production
Copy staging and production deployment YAML files as described in k8s config

License
MIT License – feel free to use this as a reference for your own DevOps projects.