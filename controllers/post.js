const shortid = require('shortid')

module.exports = (app) => {
    const postController = {
        create: (req, res, next) => {
            const  { register } = app.models
            const id_user = req.session.user.id_user

            register.findOne({id: id_user})
            .then((user) => {
                data = new Date()

                post = {
                    id_post: shortid(),
                    id_user: id_user,
                    avatar_url: user.profile.avatar_url,
                    username: user.profile.name,
                    content: req.body.post_content,
                    image: "",
                    interactions: {
                        likes: 0,
                        comments: 0,
                        shared: 0
                    },
                    vagas: {},
                    createdAt: [data.getDate(), data.getMonth()+1, data.getFullYear()-100]
                }
                user.posts.push(post)

                register.findOneAndUpdate(
                    {id: id_user}, 
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