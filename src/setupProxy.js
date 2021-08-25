const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/users","/find","/feeds","/img","/feed","/like","/updateuser","/comments"], { target: "https://social-media-app-api.herokuapp.com" })
    );
  };