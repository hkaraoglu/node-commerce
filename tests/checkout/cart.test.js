const request = require('supertest');
const assert = require('assert');
const app = require('../../app');
const base = require('../base');
const testUser = require('../auth/testUser');
const testProduct = require('../product/testProduct');

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

    it('GET checkout/cart', function(done)
    {
        request(app)
            .get('/checkout/cart')
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "GET CART PRODUCTS FAILED!");
                assert(Array.isArray(response.body.data), "GET CART PRODUCTS DATA IS NOT AN ARRAY!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

    it('POST checkout/cart/:product_id', function (done)
    {
        request(app)
            .post('/checkout/cart/' + testProduct.id)
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "ADD PRODUCT TO CART FAILED!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

    it('PUT checkout/cart/:product_id', function (done)
    {
        request(app)
            .put('/checkout/cart/' + testProduct.id + "?quantity=2")
            .set('Cookie', cookie)
            .send({

            })
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "UPDATE PRODUCT QUANTITY FAILED!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

    it('DELETE checkout/cart/:product_id', function (done)
    {
        request(app)
            .delete('/checkout/cart/' + testProduct.id)
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "DELETE CART PRODUCT FAILED!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

});
