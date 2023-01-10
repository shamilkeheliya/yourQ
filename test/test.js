const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../express-backend/index');

const User = require('../express-backend/model/user-model');
const Questionnaire = require('../express-backend/model/questionnaire-model');
const Answer = require('../express-backend/model/answer-model');

chai.use(chaiHttp);

const request = require("supertest")("http://localhost:3000");
//const expect = require("chai").expect;

describe("GET /airports", function () {
  it("returns all airports, limited to 30 per page", async function () {
    const response = await request.get("/h");

    expect(response.status).to.eql(200);
    let actualVal = response.body.message;
    expect(actualVal).to.be.equal('hello');
  });
});

// describe('Test Users API', ()=>{

//     it('test', (done)=>{
//         chai.request(server)
//         .get('http://localhost:3000/h')
//         .end((err, res)=>{
//             res.should.have.status(200);
//             // res.body.should.be.a('object');
//             // console.log(actualVal);
//             // expect(actualVal).to.be.equal('hello');
//             done();
//         });
//     });

//     //  let user = {
//     //     firstName: 'Test-First-Name',
//     //     lastName: 'Test-Last-Name',
//     //     email: 'test@email.com',
//     //     password: 'testPassword',
//     // } 

//     // it('Create User', (done)=>{

//     //     chai.request(server)
//     //     .post('/api/user/create')
//     //     .send(user)
//     //     .end((err, res)=>{
//     //         res.should.have.status(200);
//     //         done();
//     //     });

//     // });

// });


// //During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

// let mongoose = require("mongoose");
// let Book = require('../app/models/book');

// //Require the dev-dependencies
// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('../server');
// let should = chai.should();


// const request = require("supertest")("https://airportgap.dev-tester.com/api");
// const expect = require("chai").expect;

// describe("GET /airports", function () {
//   it("returns all airports, limited to 30 per page", async function () {
//     const response = await request.get("/airports");

//     expect(response.status).to.eql(200);
//     expect(response.body.data.length).to.eql(30);
//   });
// });
