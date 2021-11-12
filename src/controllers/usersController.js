const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    users: (req, res) =>{
        res.render("users", {users})
    },
    detail: (req, res) => {
        let user = users.find(user=>user.id==req.params.id)
        res.render ("users", { user })
    },
}

module.exports = controller