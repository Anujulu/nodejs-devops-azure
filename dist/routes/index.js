"use strict";
const url = require('url');
const homeHandler = require('./home');
const healthHandler = require('./health');
const infoHandler = require('./info');
const metricsHandler = require('./metrics');
const { setSecurityHeaders, setCorsHeaders, logRequest } = require('../middleware');
let requestCount = 0;
const router = (req, res) => {
    requestCount++;
    const { pathname } = url.parse(req.url, true);
    // Apply middleware
    logRequest(req, pathname);
    setCorsHeaders(res);
    setSecurityHeaders(res);
    // Route handling
    switch (pathname) {
        case '/':
            homeHandler(req, res, requestCount);
            break;
        case '/health':
            healthHandler(req, res, requestCount);
            break;
        case '/info':
            infoHandler(req, res);
            break;
        case '/metrics':
            metricsHandler(req, res, requestCount);
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
};
module.exports = router;
