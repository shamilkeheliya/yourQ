const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../express-backend/index');

const User = require('../express-backend/model/user-model');
const Questionnaire = require('../express-backend/model/questionnaire-model');
const Answer = require('../express-backend/model/answer-model');

chai.use(chaiHttp);

describe('Test Users API', ()=>{

    it('test', (done)=>{
        chai.request(server)
        .get('/h')
        .end((err, res)=>{
            res.should.have.status(200);
            // res.body.should.be.a('object');
            // console.log(actualVal);
            // expect(actualVal).to.be.equal('hello');
            done();
        });
    });

    //  let user = {
    //     firstName: 'Test-First-Name',
    //     lastName: 'Test-Last-Name',
    //     email: 'test@email.com',
    //     password: 'testPassword',
    // } 

    // it('Create User', (done)=>{

    //     chai.request(server)
    //     .post('/api/user/create')
    //     .send(user)
    //     .end((err, res)=>{
    //         res.should.have.status(200);
    //         done();
    //     });

    // });

});


   