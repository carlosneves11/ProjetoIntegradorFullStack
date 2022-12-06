module.exports = (app) => {
    const { post } = app.controllers 
    app.post('/post', post.create)
}