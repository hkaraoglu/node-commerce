const request = require('supertest');
const assert = require('assert');
const app = require('../../app');
const base = require('../base')
const testUser = require('../auth/testUser');
const testProduct = require('../product/testProduct');

describe('TEST /account/favorite', async function()
{
    let cookie;
    before('connect', base.onAppStarted);

    before('login', function(done){
        testUser.getCookie(request(app), function (_cookie) {
            cookie = _cookie;
            done();
        });
    });

    it('GET account/favorite', function(done)
    {
        request(app)
            .get('/account/favorite')
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "GET FAVORITE LIST SUCCESS FAILED!");
                assert(Array.isArray(response.body.data), "GET FAVORITE LIST DATA IS NOT AN ARRAY!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

    it('POST /account/favorite/:product_id', function (done)
    {
        request(app)
            .post('/account/favorite/' + testProduct.id)
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "ADD FAVORITE FAILED!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

    it('DELETE /account/favorite/:product_id', function (done)
    {
        request(app)
            .delete('/account/favorite/' + testProduct.id)
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "DELETE FAVORITE FAILED!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });
});
