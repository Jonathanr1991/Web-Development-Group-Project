const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));

//connects mongo to mongodb atlas
const uri = process.env.ATLAS_URI;
mongoose //try to connect to cloud, then try local, then just wait for cloud connection
    .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });

var connection = mongoose.connection;

connection.on("error", (err) => {
    console.log(
        "Got error connecting MongoDB instance at " + uri + " [" + err + "]"
    );
    console.log("Attempting to connect to MongoDB (via Mongoose) locally...");
    mongoose.connect("mongodb://localhost:27017/c484g3test", {
        //not sure what the idiomatic way of doing a backup connection is
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    connection.on("error", () => {
        console.log(
            "mongoose couldn't connect to local server either, exiting"
        );
        process.kill(1);
    });
});

connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

// adding model files to be able to use them
const userRouter = require("./routes/user");
const eventRouter = require("./routes/event");

app.use("/user", userRouter);
app.use("/event", eventRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});
