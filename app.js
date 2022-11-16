require('dotenv').config()
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const app = express();

// Views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))

// Session
app.use(cookieParser(process.env.ACCESS_TOKEN_SESSION))
app.use(session())

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Consign
consign({})
.include('')
.then('controllers')
.then('routes')
.into(app)



// Start up server.
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})
console.log('CCSM Vagas')