//used to run locally, apparently doesn't matter in Heroku environment
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/user", {
            target: "http://" + process.env.HOST + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/user/*", {
            target: "http://" + process.env.HOST + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/event", {
            target: "http://" + process.env.HOST + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/event/*", {
            target: "http://" + process.env.HOST + ":3000/",
        })
    );
};
