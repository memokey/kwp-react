const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/rentals", {
      target: "https://apisandbox.buildium.com",
      changeOrigin: true,
    })
  );
};
