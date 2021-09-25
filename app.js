const express=require("express");
const app=express();
const path=require("path");

app.listen(3030,()=>{console.log("Servidor corriendo en: https://localhost:3030/")});

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.get("/detalleDelProducto", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/detalleDelProducto.html"))
})

app.use(express.static("public"))