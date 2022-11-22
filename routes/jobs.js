const verify = require('../middleware/middleware')
module.exports = (app) => {
   const {jobs} = app.controllers 
    app.get('/jobs', verify, jobs.view )
}