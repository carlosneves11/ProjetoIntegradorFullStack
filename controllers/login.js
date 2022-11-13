module.exports = (app) => {
    const LoginControllers = {
        login: (req, res, next) => {
            console.log("Funcionou")
            res.end()
        }
    }
    return LoginControllers
}