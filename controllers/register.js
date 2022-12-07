const bcrypt = require('bcrypt')
const shortid = require('shortid')

module.exports = (app) => {
    const RegisterController = {
        view: (req, res, next) => {
            // usando view de teste
            res.render('teste_register')
        },
        create: (req, res, next) => {
            const { name, email, password, type } = req.body
            const registerModel = app.models.register

            registerModel.findOne({email: email.toLowerCase()})
            .then((users) => { 
                if (users == null) {
                    user = {
                        id: shortid(),
                        profile: {
                            avatar_url: "",
                            name: name,
                            birth: null,
                            email: null,
                            pronoun: null,
                            title: null,
                            current_position: null,
                            sector: [],
                            phone: [],
                            location: []
                        }, 
                        posts: [],
                        jobs: {},
                        configurations: {
                            email: email.toLowerCase(),
                            password: password,
                            type: type,
                            theme: "light"
                        },
                        email: email.toLowerCase(), 
                        notifications: {}
                    }

                    // encriptografa a senha
                    bcrypt.hash(password, 10, (errBcrypt, hash) => {
                        if (errBcrypt) return res.status(500).send({error: errBcrypt})

                        user.configurations.password = hash

                        // Cria o usuário
                        registerModel.create(user)
                        .then(()=>{
                            console.log(`[MongoDB] User account "${name}" created`)
                        })
                        .catch(err => console.log(err))

                        return res.status(201).redirect('/login')
                    })
                }
                else {
                    console.log(`[MongoDB] User account "${name}" already exists`)
                    return res.status(401).redirect('/register')
                }
            })
            .catch(err => console.log(err))

        }
    }
    return RegisterController
}
