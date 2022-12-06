const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    const LoginControllers = {
        login: (req, res, next) => {
            if(req.session.token === undefined) {
                res.render('login')
            } else {
                res.redirect('/jobs')
            }
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
                                id_user: user.id,
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
        },
        logout: (req, res, next) => {
            req.session.token = undefined
            res.redirect('/login')
        }
    }
    return LoginControllers
}