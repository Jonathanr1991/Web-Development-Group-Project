import { MongoMemoryServer } from "mongodb-memory-server";
//get server routes
const event = require("../backend/routes/event");
const feedback = require("../backend/routes/feedback");
const group = require("../backend/routes/group");
const post = require("../backend/routes/post");
const thread = require("../backend/routes/thread");
const user = require("../backend/routes/user");
const moxios = require("moxios");
const request = require("supertest");
//======================================
//EXPRESS COPIED FROM server.js START
//======================================
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();
//======================================
//EXPRESS COPIED FROM server.js END
//======================================
const initServer = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(express.static(path.join(__dirname, "build"))); //this may not be necessary?

  //BEGIN INTERRUPT usual server.js structure to set up in-memory database
  var mongoServer;
  try {
    mongoServer = new MongoMemoryServer();
  } catch (Error) {
    console.log(Error);
  }
  var waitTime = 0;
  var waitTimeMax = 10;
  var interval = 100; //ms
  while (mongoServer === undefined) {
    waitTime += 1;
    console.log(
      `Trying to initialize and connect to mongo server - waitTime = ${waitTime}, waiting ${interval}ms (${waitTime}/${waitTimeMax})...`
    );
    if (waitTime === waitTimeMax) {
      console.log("failed to connect to memory server, exiting");
      process.exit(1);
    }
    setTimeout(() => {}, interval);
  }

  //connects mongo to mongodb atlas
  //(old) try to connect to cloud, then try local, then just wait for cloud connection
  mongoose.connect(mongoServer.getUri(), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 100,
    reconnectTries: 10,
  });
  mongoose.connection.on("error", (e) => {
    console.log(e);
  });
  mongoose.connection.once("open", () => {
    console.log(`MongoDB successfully connected to ${mongoServer.getUri()}`);
  });
  //END INTERRUPT usual server.js structure to set up in-memory database

  var connection = mongoose.connection;

  connection.on("error", (err) => {
    console.log("Got error connecting MongoDB instance at ? [" + err + "]");
    console.log(err);
    process.kill(1);
    //local database fallback removed
  });

  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });

  app.use(event());
  app.use(feedback());
  app.use(group());
  app.use(post());
  app.use(thread());
  app.use(user());

  return app;
};

describe("GET /user", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("It should fetch users from db", async () => {
    moxios.stubRequest(/\/user/, {
      status: 200,
      response: {
        blog: "https://codewithhugo.com",
        location: "London",
        bio: "Developer, JavaScript",
        public_repos: 39,
      },
    });
    const app = await initServer();
    await request(app).get("/user");
    expect(moxios.requests.mostRecent().url).toBe(
      "https://api.github.com/users/HugoDF"
    );
  });
  test("It should 200 and return a transformed version of GitHub response", async () => {
    moxios.stubRequest(/\/user/, {
      status: 200,
      response: {
        blog: "https://codewithhugo.com",
        location: "London",
        bio: "Developer, JavaScript",
        public_repos: 39,
      },
    });
    const app = await initServer();
    const res = await request(app).get("/user");
    expect(res.body).toEqual({
      blog: "https://codewithhugo.com",
      location: "London",
      bio: "Developer, JavaScript",
      publicRepos: 39,
    });
  });
});
