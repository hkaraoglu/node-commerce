const request = require('supertest');
const app = require('../../app');
const assert = require('assert');

describe('POST /auth/login', function()
{
    let cookie = null;
    before('connect', function(){
        return new Promise((resolve,reject) => {
            app.on("appStarted", function(){
                return resolve();
            });
        });
    });

    it('login user', function(done)
    {
        request(app)
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send({
                email : "hkaraoglutr@gmail.com",
                password : "1234"
            })
            .expect(200)
            .then(response => {
                assert(response.body.success, "LOGIN FAILED!");
                cookie = response.header['set-cookie'];
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

});
