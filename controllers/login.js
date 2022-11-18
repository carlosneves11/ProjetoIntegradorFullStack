const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    const LoginControllers = {
        login: (req, res, next) => {
            console.log(req.session)
            res.render('login')
        },
        loginVerify: (req, res, next) => {
            const { email, password } = req.body
            const { register } = app.models

            register.findOne({email: email.toLowerCase()})
            .then((user) => {
                if (user === null) return res.status(401).redirect("/login")
                else {
                    bcrypt.compare(password, user.configurations.password, (err, result) => {
                        if (result) {
                            const token = jwt.sign({
                                id_user: user._id,
                                email: user.email,
                                auth: true,
                                theme: user.configurations.theme
                            }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "7d"})
                            req.session.token = token
                            res.status(201).redirect('/jobs')
                        } else {
                            return res.status(401).redirect('/login')
                        }
                    })
                }
            })
        }
    }
    return LoginControllers
}