const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest(require('../index.js'))


describe("GET /listing", () => {
  it("should return a 200 response", done => {
    api
      .get("/candies")
      .set("Accept", "application/json")
      .expect(200, done)
  })
})