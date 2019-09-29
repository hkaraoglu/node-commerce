const request = require('supertest');
const app = require('../../app');
const assert = require('assert');
const newTestUser = {
    email : "tes22t@test-----node-commerce.com",
    password : "1234",
    firstname : "hasan",
    lastname : "karaoğlu"
};

describe('POST /auth/register', function()
{
    let cookie = null;
    before('connect', function(){
        return new Promise((resolve,reject) => {
            app.on("appStarted", function(){
                return resolve();
            });
        });
    });

    it('register user', function(done)
    {
        request(app)
            .post('/auth/register')
            .set('Accept', 'application/json')
            .send(newTestUser)
            .expect(200)
            .then(response => {
                console.log(response.body)
                assert(response.body.success, "REGISTER FAILED!");
                ssert(response.body.data.email === newTestUser.email, "REGISTER FAILED! EMAIL ADDRESS ARE NOT EQUAL!");
                cookie = response.header['set-cookie'];
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

});
