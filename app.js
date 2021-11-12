const express = require("express");
const app = express();
const path = require("path");
const mainRouter = require("./src/routes/mainRouter")
const productsRouter = require("./src/routes/products")
const usersRouter = require("./src/routes/usersRouter")

app.listen(3030, ()=>{ 
    console.log("El servidor RED corriendo en: http://localhost:3030/");
});


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("public"));
app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter)