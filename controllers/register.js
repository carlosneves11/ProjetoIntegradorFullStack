module.exports = (app) => {
    const RegisterController = {
        view: (req, res, next) => {
            // [para fazer] adicionar view
            //res.render('register')
            res.end()
        },
        create: (req, res, next) => {
            const { name, email, password, type } = req.body
            // [para fazer] criar registro no mongodb
            res.end()
        }
    }
    

    return RegisterController
}