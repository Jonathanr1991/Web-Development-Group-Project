//used to run locally, apparently doesn't matter in Heroku environment
const proxy = require("http-proxy-middleware");
require("dotenv").config();

module.exports = function (app) {
    app.use(
        proxy("/user", { target: "http://" + process.env.HOST + ":3000/" })
    );
    app.use(
        proxy("/user/*", { target: "http://" + process.env.HOST + ":3000/" })
    );
    app.use(
        proxy("/event", { target: "http://" + process.env.HOST + ":3000/" })
    );
    app.use(
        proxy("/event/*", { target: "http://" + process.env.HOST + ":3000/" })
    );
};
