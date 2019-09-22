const app = require('../app');
module.exports.onAppStarted = function() {
    return new Promise((resolve, reject) => {
        app.on("appStarted", function () {
            return resolve();
        });

    });
}