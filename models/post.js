const mongoose = require('mongoose')

module.exports = () => {
    const postsModel = mongoose.model("Posts", {
        id: String,
        posts: Object
    })

    return postsModel
}