const verify = require('../middleware/middleware')
module.exports = (app) => {
    const { profile } = app.controllers;
    app.get('/profile', verify, profile.view)
    app.post('/profile', profile.update)
}