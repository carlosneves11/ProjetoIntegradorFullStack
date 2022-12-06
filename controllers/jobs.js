module.exports = (app) =>  {
    const JobsController = {
        view: (req, res, next) => {
            res.render('jobs')
        }
    }
    return JobsController   
}
    
