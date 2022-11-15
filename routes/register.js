module.exports = (app) => {
    const { register } = app.controllers
    app.get('/register', register.view)
}