const assert = require('assert');
const theAccount = {
    email   : "hkaraoglutr@gmail.com",
    password: "1234"
};

exports.getCookie = function (request, done) {
    request
    .post('/auth/login')
    .send(theAccount)
    .end(function (err, res) {
        if (err) {
            throw err;
        }
        assert(res.body.success, "LOGIN FAILED!");
        assert(res.body.data.email === theAccount.email, "SESSION USER IS DIFFERENT!");
        done(res.header['set-cookie']);
    });
};