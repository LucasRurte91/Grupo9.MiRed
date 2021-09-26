const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

app.listen(3030, ()=>{ 
    console.log("El servidor RED corriendo en: http://localhost:3030/");
});

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "./views/home.html"))
});

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.get("/detalleDelProducto", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/detalleDelProducto.html"))
})

