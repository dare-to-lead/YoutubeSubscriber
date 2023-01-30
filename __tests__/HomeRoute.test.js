const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/app");
const expect = chai.expect;

// Assertion style
chai.should();

chai.use(chaiHttp);

// GET route test for home route
describe("/Testing the home route", () => {
  it("should get default API home route", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        const greetingMsg = res.body.greeting;
        expect(greetingMsg).to.be.eq(
          "Hi, I am Anjum Shaikh, this is a backend API to Youtube Subscribers"
        );
      });
    done();
  });
});
