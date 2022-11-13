module.exports = (app) => {
    const { login } = app.controllers

    app.get('/', (req, res, next) => {
        res.redirect('/login')
    })

    app.get('/login', login.login)
}