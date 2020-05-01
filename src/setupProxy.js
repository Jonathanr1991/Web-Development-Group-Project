//used to run locally, apparently doesn't matter in Heroku environment
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const host = process.env.host || process.env.HOST || "localhost";
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/user", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/user/*", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/event", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/event/*", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/post", { target: "http://" + host + ":3000/" })
    );
    app.use(
        createProxyMiddleware("/post/*", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/group", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/group/*", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/thread", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/thread/*", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/feedback", {
            target: "http://" + host + ":3000/",
        })
    );
    app.use(
        createProxyMiddleware("/feedback/*", {
            target: "http://" + host + ":3000/",
        })
    );
};
