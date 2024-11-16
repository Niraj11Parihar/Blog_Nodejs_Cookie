const express = require('express');
const db = require('./config/dataBase');
const path = require('path');
const router = require('./routers/routers');
const p_router = require('./routers/product.router');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const fs = require('fs');
const flash = require('connect-flash/lib/flash');

const app = express();
app.set('view engine', 'ejs');

// bodyparse urlencoded and public/uploads 
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session setup
app.use(session({
    secret: 'secret',   
    resave: false,
    saveUninitialized: false
}));
// flash message 
app.use(flash());

// passport.js 
app.use(passport.initialize());
app.use(passport.session());

// router called 
app.use(router);
app.use("/product", p_router);

db;

app.listen(4186, (err) => {
    if (!err) {
        console.log('Express connected at http://localhost:4186');
    } else {
        console.log('Express not connected at http://localhost:4186');
        return false;
    }
});
