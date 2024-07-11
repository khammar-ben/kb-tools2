// server.js or wherever you configure your Express server
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Add proxy middleware
app.use(
    '/app',
    createProxyMiddleware({
        target: 'http://localhost:5000', // Your backend server URL
        changeOrigin: true,
    })
);

// Add other middleware and routes
// ...

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
