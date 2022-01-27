const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const methodOverride =  require('method-override')
const mainRouter = require("./routes/mainRouter")
const productsRouter = require("./routes/products")
const usersRouter = require("./routes/usersRouter")
const productsAPIRouter =require('./routes/api/products')

//middleware
//const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
//app.use(userLoggedMiddleware);
//cookie
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
const cookies = require('cookie-parser');
app.use(cookies());
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3030, ()=>{ 
    console.log("El servidor RED corriendo en: http://localhost:3030/");
});

app.use(session({
	secret: "Shhh, secreto",
	resave: false,
	saveUninitialized: false,
}));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))

app.use("/users", usersRouter)
app.use("/products", productsRouter);
app.use("/", mainRouter);
app.use("/api/products", productsAPIRouter)

