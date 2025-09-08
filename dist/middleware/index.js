"use strict";
const logRequest = (req, pathname) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method} ${pathname} - ${req.headers['user-agent'] || 'Unknown'}`);
};
const setCorsHeaders = (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};
const setSecurityHeaders = (res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
};
module.exports = {
    logRequest,
    setCorsHeaders,
    setSecurityHeaders
};
