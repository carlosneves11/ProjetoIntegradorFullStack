module.exports = (app) => {
    const { register } = app.controllers
    app.get('/register', register.view)
    app.post('/register', register.create)
    
}