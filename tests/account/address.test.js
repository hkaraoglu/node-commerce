const request = require('supertest');
const app = require('../../app');

describe('GET /account/address', function()
{
    before('connect', function(){
        return new Promise((resolve,reject) => {
            app.on("appStarted", function(){
                return resolve();
            });
        });
    });

    it('responds with json', function(done)
    {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .end((err, res) =>
            {
                if (err) {
                    return done(err);
                }
                expect(res.text).
                return done();
            });
    });
});
