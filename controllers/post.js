const shortid = require('shortid')

module.exports = (app) => {
    const postController = {
        create: (req, res, next) => {
            const  { register } = app.models
            const id_user = req.session.user.id_user

            register.findOne({id: id_user})
            .then((user) => {
                post = {
                    id_post: shortid(),
                    content: req.body.post_content,
                    image: "",
                    interactions: {
                        likes: 0,
                        comments: 0,
                        shared: 0
                    },
                    vagas: {},
                    createdAt: new Date()
                }
                user.posts.push(post)

                register.findOneAndUpdate(
                    {"_id": id_user}, 
                    {posts: user.posts },
                    {upsert: true}, 
                    ()=>{}
                )
            })       

            res.redirect('/jobs')
        }
    }
    return postController
}