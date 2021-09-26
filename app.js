const { prototype } = require("events");
const express = require("express");
const app = express();
const path = require ("path")
app.use(express.static("public"));


app.listen (3006, () => {
    console.log("servidor levantado en: http://localhost:3006/");
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,"./views/register.html"))
});

app.get("/productCart",  (req, res) => {
    res.sendFile(path.join(__dirname, "./views/productCart.html"));
}); 


