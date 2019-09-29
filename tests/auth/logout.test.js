const request = require('supertest');
const assert = require('assert');
const app = require('../../app');
const base = require('../base')
const testUser = require('../auth/testUser');

describe('POST /auth/login', function()
{
    let cookie;
    before('connect', base.onAppStarted);

    before('login', function(done){
        testUser.getCookie(request(app), function (_cookie) {
            cookie = _cookie;
            done();
        });
    });

    it('logout user', function(done)
    {
        request(app)
            .get('/auth/logout')
            .set('Accept', 'application/json')
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "LOGOUT FAILED!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

});
