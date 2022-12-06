const { default: mongoose } = require("mongoose")

module.exports = (app) => {
    const ProfileController = {
        view: (req, res, next) => {
            const { register } = app.models
            const id_user = req.session.user.id_user
            
            register.findOne({id: id_user})
            .then((user) => {
                console.log(user)
                
                let info_base = {
                    profile: user.profile,
                    posts: user.posts                    
                }

                res.render('profile', {info_base})
            })
        },
        update: (req, res, next) => {
            const { register } = app.models
            const id_user = req.session.user.id_user

            register.findOne({id: id_user})
            .then((user) => {
                const { pronoun, birth, email, oldpassword, password1, password2, current_position, sector, phone, location } = req.body

                switch (pronoun) {
                    case "":
                        user.profile.pronoun = user.profile.pronoun
                        break
                    case "she":
                        user.profile.pronoun = "Ela, Dela"
                        break
                    case "he":
                        user.profile.pronoun = "Ele, Dele"
                        break
                    case "they":
                        user.profile.pronoun = "Elu, Delu"
                        break
                    case "other":
                        user.profile.pronoun = "Outro"
                        break
                    case "none":
                        user.profile.pronoun = ""
                        break
                    default:
                        user.profile.pronoun = ""
                        break
                }
                if (birth !== "") user.profile.birth = birth
                if (current_position !== "") user.profile.current_position = current_position
                if (sector !== "") user.profile.sector = sector
                if (phone !== "") user.profile.phone = phone
                if (location !== "") user.profile.location = location



                register.findOneAndUpdate({ id: id_user}, {$set: {profile: user.profile}}).exec()
                
                res.redirect("/profile")
            })
        }
    }

    return ProfileController
}
//https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application