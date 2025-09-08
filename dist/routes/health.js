"use strict";
const environment = process.env.NODE_ENV || 'development';
const healthHandler = (req, res, requestCount) => {
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
};
module.exports = healthHandler;
