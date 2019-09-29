const request = require('supertest');
const assert = require('assert');
const app = require('../../app');
const base = require('../base')
const testUser = require('../auth/testUser');
const testData = {
    firstname    : "test first updated",
    lastname     : "test last updated",
    definition   : "office address",
    country_id   : 1,
    postal_code  : "1232332",
    address_line : "bla2 bla 2street number 1",
    phone        : "3524233444"
};

describe('TEST /account/address', async function()
{
    let cookie;
    let addressId;
    before('connect', base.onAppStarted);

    before('login', function(done){
        testUser.getCookie(request(app), function (_cookie) {
            cookie = _cookie;
            done();
        });
    });

    it('GET account/address', function(done)
    {
        request(app)
            .get('/account/address')
            .set('Cookie', cookie)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "GET ADDRESS LIST SUCCESS FAILED!");
                assert(Array.isArray(response.body.data), "GET ADDRESS LIST DATA IS NOT AN ARRAY!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

   it('POST /account/address', function (done)
    {
        request(app)
            .post('/account/address')
            .set('Cookie', cookie)
            .send(
                {
                    firstname    : "test first",
                    lastname     : "test last",
                    definition   : "office address",
                    country_id   : 1,
                    postal_code  : "1232332",
                    address_line : "bla2 bla 2street number 1",
                    phone        : "3524233444"
                }
            )
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "ADD ADDRESS FAILED!");
                addressId = response.body.data._id;
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });


    it('PUT /account/address', function (done)
    {
        console.log('/account/address/' + addressId);
        request(app)
            .put('/account/address/' + addressId)
            .set('Cookie', cookie)
            .send(testData)
            .expect(200)
            .then(response => {
                console.log(response.body);
                assert(response.body.success, "UPDATE ADDRESS FAILED!");
                assert(response.body.data.firstname === testData.firstname, "UPDATE ADDRESS FAILED!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

    it('GET /account/address/{addressId}', function (done)
    {
        request(app)
            .get('/account/address/' + addressId)
            .set('Cookie', cookie)
            .send(testData)
            .expect(200)
            .then(response => {
                assert(response.body.success, "GET ADDRESS DETAIL FAILED!");
                assert(response.body.data._id === addressId, "GET ADDRESS FAILED! ID NOT FOUND!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });

    it('DELETE /account/address', function (done)
    {
        request(app)
            .get('/account/address/' + addressId)
            .set('Cookie', cookie)
            .send(testData)
            .expect(200)
            .then(response => {
                assert(response.body.success, "DELETE ADDRESS FAILED!");
                done();
            }).catch((err) => {
            console.error("Handling promise rejection: ", err);
        });
    });
});
