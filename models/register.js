const mongoose = require('mongoose')

module.exports = () => {
    const registerModel = mongoose.model('Users', {
        id: String,
        profile: Object,
        posts: Object,
        jobs: Object,   
        configurations: Object,
        email: String,
        notifications: Object,
        created_at: String,
    })

    return registerModel
}