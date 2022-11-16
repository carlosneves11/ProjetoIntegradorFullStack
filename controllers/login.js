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

            // [IMPORTANTE] MONGODB
            let user = {
                email: "teste@gmail.com",
                password: "senha123",
                _id:"diashduqhweyquw71723127831762531231"
            }

            // Verify if email exist
            const variavelteste = (user) => {
                if (user === null) return res.status(401).redirect("/login")
                else {
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (result) {
                            const token = jwt.sign({
                                id_user: user._id,
                                email: user.email,
                                auth: true,
                                theme: "light"
                            }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "7d"})
                            req.session.token = token
                            res.status(201).redirect('/feed')
                        } else {
                            return res.status(401).redirect('/login')
                        }

                    })
                }

            }

            variavelteste(user)

        }
        // receber email 
        // receber senha

    }
    return LoginControllers
}