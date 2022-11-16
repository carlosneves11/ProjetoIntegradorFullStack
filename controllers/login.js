const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    const LoginControllers = {
        login: (req, res, next) => {
            res.render('login')
        },
        loginVerify: (req, res, next) => {

            // [IMPORTANTE] PÁGINA
            const email = "teste@gmail.com"
            const password = "senha123"

            // [IMPORTANTE] MONGODB
            let user = {
                email: "teste@gmail.com",
                password: "senha123"
            }
            user = null



            // Verify if email exist
            const variavelteste = (user) => {
                if (user === null) return res.status(401).redirect("/outraPagina")
            }

            
        }
        // receber email 
        // receber senha

    }
    return LoginControllers
}