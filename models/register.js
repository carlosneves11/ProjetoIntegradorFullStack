const mongoose = require('mongoose')

module.exports = () => {
    const Users = mongoose.model('Users', {
        id_profile : String,
        id_messages : String,
        id_posts : String,
        id_jobs : String,
        id_cofiguration: String,
        email : String,
    })

    return Users
}