module.exports = (app) => {
    const { profile } = app.controllers;
    app.get('/profile', profile.view)
    app.post('/profile', profile.update)
}