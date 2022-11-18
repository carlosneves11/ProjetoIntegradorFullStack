module.exports = (app) => {
   const {jobs} = app.controllers 
    app.get('/jobs', jobs.view )
}