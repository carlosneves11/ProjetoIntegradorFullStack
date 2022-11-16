const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@projetointegrador.q4zcucp.mongodb.net/CCSMVAGAS?retryWrites=true&w=majority`)
.then(()=>{
    console.log('MongoDB connection sucessful')

})
.catch((err)=>{

    console.log(err)
})