module.exports = (app) => {
    const RegisterController = {
        view: (req, res, next) => {
            res.render('register')
        }        
    }

    return RegisterController
}