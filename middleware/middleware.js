const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.session.token
        
        if (token == undefined) {
            return res.status(401).redirect('/')
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
            if (err) { return res.redirect('/') }

            req.session.user = result
        })

        next()
    }
    catch (err) {
        res.status(401).redirect('/')
    }
}