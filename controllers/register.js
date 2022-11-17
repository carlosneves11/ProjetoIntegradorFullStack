module.exports = (app) => {
    const RegisterController = {
        view: (req, res, next) => {
            // usando view de teste
            res.render('teste_register')
        },
        create: (req, res, next) => {
            const { name, email, password, type } = req.body
            // [para fazer] criar registro no mongodb

            const registerModel = app.models.register

            user = {
                profile: {
                    avatar: null,
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
                posts: {},
                jobs: {},
                configurations: {
                    email: email,
                    password: password,
                    type: type,
                    theme: "light"
                },
                email: email, 
                notifications: {}
            }

            registerModel.create(user)
            .then(()=>{
                console.log(user)
            })
            .catch(err => console.log(err))

            
            //teste
            res.end()
        }
    }
    

    return RegisterController
}
