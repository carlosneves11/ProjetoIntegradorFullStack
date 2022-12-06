module.exports = (app) =>  {
    const JobsController = {
        view: (req, res, next) => {
            const { register } = app.models
            const id_user = req.session.user.id_user
            
            register.findOne({id: id_user})
            .then((user) => {
                
                let allposts = {
                    profile: user.profile,
                    posts: user.posts                    
                }

                res.render('jobs', {allposts})
            })
        }
    }
    return JobsController   
}
    
