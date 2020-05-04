//testing file for express as well as mongodb essentially
import { equal } from "assert";
const axios = require("axios");
const moxios = require("moxios");
const sinon = require("sinon");
const request = require("supertest");
require("dotenv").config();

describe("Loading express", function () {
  var server;
  beforeAll(function () {
    server = require("../backend/server-testable"); //, { bustCache: true });
  });
  afterAll(function () {
    server.close();
  });
  it("responds to /event", (done) => {
    request(server).get("/event").expect(200, done);
  });
  it("responds to /feedback", (done) => {
    request(server).get("/feedback").expect(200, done);
  });
  it("responds to /group", (done) => {
    request(server).get("/group").expect(200, done);
  });
  it("responds to /post", (done) => {
    request(server).get("/post").expect(200, done);
  });
  it("responds to /thread", (done) => {
    request(server).get("/thread").expect(200, done);
  });
  it("responds to /user", (done) => {
    request(server).get("/user").expect(200, done);
  });
  it("Normally 404s everything else", function testArbitrary(done) {
    request(server).get("/foo/bar").expect(404, done);
  });
});

describe("GET /user/whatever", () => {
  var server;
  beforeAll(() => {
    moxios.install();
    server = require("../backend/server-testable"); //, { bustCache: true });
  });
  afterAll(() => {
    moxios.uninstall();
    server.close();
  });
  test("It should return a specified user", async () => {
    moxios.stubRequest(/\/user\/5e8dfe51104e845cc1961935/, {
      //John Doe, first user in collection
      status: 200,
      response: {
        email: "jdoe@towson.edu",
        firstName: "John",
        imageURL: "../../src/img/user-profile-pic/default_profile.jpg",
        isAdmin: false,
        lastName: "Doe",
        password:
          "$2b$10$RIwnt.Hf3vJ5F3TjJI8Qx.6CrqdEhTBRKcbdOHk5ROfm.0SIx9ghi",
      },
    });
    const res = await request(server).get("/user/5e8dfe51104e845cc1961935");
    expect(res.body).toEqual({
      __v: 0,
      _id: "5e8dfe51104e845cc1961935",
      email: "jdoe@towson.edu",
      firstName: "John",
      imageURL: "../../src/img/user-profile-pic/default_profile.jpg",
      isAdmin: false,
      lastName: "Doe",
      password: "$2b$10$RIwnt.Hf3vJ5F3TjJI8Qx.6CrqdEhTBRKcbdOHk5ROfm.0SIx9ghi",
    });
  });
});
