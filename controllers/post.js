const shortid = require('shortid')

module.exports = (app) => {
    const postController = {
        create: (req, res, next) => {
            const  { register } = app.models

            register.findOneAndUpdate({"_id": "638cad315849cac169574784"}, {posts:["a", "b"]}, {upsert: true}, ()=>{})
        

            res.redirect('/teste')
        }
    }
    return postController
}