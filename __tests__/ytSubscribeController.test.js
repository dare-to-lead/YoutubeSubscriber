const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/app");
const expect = chai.expect;

// Assertion style
chai.should();

chai.use(chaiHttp);

//GET route test to get all subscribers
describe("GET all subscribers", () => {
  it("should get all subscribers", (done) => {
    chai
      .request("http://localhost:8080")
      .get("/subscribers")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eq(3);
        }
      });
    done();
  });
});

//GET route test to get a single subscriber via id
describe("GET single youtube subscriber", () => {
  it("should get a single subscriber", (done) => {
    chai
      .request("http://localhost:8080")
      .get("/subscribers/63d753657ea251179c5a6e52")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.length.should.be.eq(1);
          res.body.should.have.property("subscribedChannel");
        }
      });
    done();
  });
});

// POST route test to create new subscriber
describe("POST a you tube subscriber", () => {
  it("should post a subscriber", (done) => {
    const subscriberData = {
      name: "Lucifer",
      subscribedChannel: "sentex",
    };
    chai
      .request("http://localhost:8080")
      .post("/subscribers/")
      .send(subscriberData)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("insertId");
          res.body.should.have.property("insertId").to.not.eq(0);
        }
      });
    done();
  });
});

// DELETE route test to delete a subscriber via ID
describe("DELETE a you tube subscriber", () => {
  it("should delete a subscriber", (done) => {
    chai
      .request("http://localhost:8080")
      .delete("/api/subscribers/63d753657ea251179c5a6e52")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("object");
          const message = res.body.message;
          expect(message).to.be.eq("deletion successful");
        }
      });
    done();
  });
});

// GET route test to get PATH '/subscribers/names'
describe("GET you tube subscriber's names", () => {
  it("should get a PATH /api/ytSubscribers/names", (done) => {
    chai
      .request("http://localhost:8080")
      .get("/subscribers/names")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.to.be.eq(3);
        }
      });
    done();
  });
});

// PATCH route test to update a subscriber
describe("UPDATE a you tube subscriber", () => {
  it("should UPDATE a subscriber", (done) => {
    const subscriberData = {
      name: "Lucifer",
      subscribedChannel: "sentex",
    };
    chai
      .request("http://localhost:8080")
      .patch("/subscribers/63d753b67ea251179c5a6e56")
      .send(subscriberData)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.should.have.status(200);
          res.body.should.be.a("object");
        }
      });
    done();
  });
});
