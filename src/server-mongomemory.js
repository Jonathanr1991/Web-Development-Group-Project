//SEPARATE FROM REST OF PROJECT ATM - run this specifically with `node src/server-mongomemory.js`; meant to help figure out how to structure _server.test.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

//require("dotenv").config();

const app = express();
const port = 3000;

//var mongoServer = new MongoMemoryServer();
require("mongodb-memory-server")
  .MongoMemoryServer.create(async (server) => {
    console.log("creating mongo memory server");
  })
  .then(async (server) => {
    const uri = await server.getUri();
    console.log("mongo server should be good", uri);

    //connects mongo to mongodb atlas
    //(old) try to connect to cloud, then try local, then just wait for cloud connection
    mongoose.connect(await uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.on("error", (e) => {
      console.log(e);
    });
    mongoose.connection.once("open", (connection) => {
      console.log(`MongoDB successfully connected to ${uri}`);
      app.use(cors());
      app.use(express.json());

      app.use(express.static(path.join(__dirname, "build")));

      // adding model files to be able to use them
      const userRouter = require("../backend/routes/user");
      const eventRouter = require("../backend/routes/event");
      const postRouter = require("../backend/routes/post");
      const groupRouter = require("../backend/routes/group");
      const threadRouter = require("../backend/routes/thread");
      const feedbackRouter = require("../backend/routes/feedback");

      app.use("/user", userRouter);
      app.use("/event", eventRouter);
      app.use("/post", postRouter);
      app.use("/group", groupRouter);
      app.use("/thread", threadRouter);
      app.use("/feedback", feedbackRouter);

      /*app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
});*/
      app.listen(port, () => {
        console.log("Server is running on port: " + port);
      });
    });

    // server
    //   .runningInstance()
    //   .getCollectionNames()
    //   .forEach(function (c) {
    //     if (!c.match("^system.indexes")) {
    //       server.runningInstance().getCollection(c).drop();
    //     }
    //   });
    ["event", "feedbacks", "group", "post", "thread", "user"].forEach(
      (str) => {}
      //server.runningInstance().createCollection(`${str}`)
    );
  });
