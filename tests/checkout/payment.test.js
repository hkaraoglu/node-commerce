const request = require('supertest');
const assert = require('assert');
const app = require('../../app');
const base = require('../base')
const testUser = require('../auth/testUser');
const testPaymentMethod = {
    id : "1"
};

describe('TEST /checkout/payment', async function()
{
    let cookie;
    before('connect', base.onAppStarted);

    before('login', function(done){
        testUser.getCookie(request(app), function (_cookie) {
            cookie = _cookie;
            done();
        });
    });

    it('GET checkout/payment', function(done)
    {
        request(app)
            .get('/checkout/payment')
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "GET PAYMENT METHODS FAILED!");
                assert(Array.isArray(response.body.data), "GET PAYMENT METHODS DATA IS NOT AN ARRAY!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

    it('PUT checkout/payment/:payment_method_id', function (done)
    {
        request(app)
            .put('/checkout/payment/' + testPaymentMethod.id)
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "SET PAYMENT METHOD FAILED!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

});
