module.exports = (app) => {
    const { login } = app.controllers

    app.get('/', (req, res, next) => {
        if(req.session.token === undefined) {
            res.redirect('/login')
        } else {
            res.redirect('/jobs')
        }
        
    })

    app.get('/login', login.login)
    app.post('/login', login.loginVerify)
    app.get('/logout', login.logout)
}