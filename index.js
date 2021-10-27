const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

const users = [
    { id: 0, name: "Fahim", age: 30 },
    { id: 1, name: "Shahriar", age: 30 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Doe", age: 30 },
]

app.get('/', (req, res) => {
    res.send("Learning Nodejs")
})

app.get('/users', (req, res) => {
    if (req.query.search) {
        const searchText = req.query.search;
        const searchRes = users.filter(user => user.name.toLowerCase().includes(searchText));
        res.send(searchRes);
    }
    else {
        res.send(users)
    }
})

// POST method
app.post('/users', (req, res) => {
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser)
})

// Dynamic API
app.get('/users/:id', (req, res) => {
    res.send(users[req.params.id])
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send("আমের রাজা ফজলি")
})

// Listening On Port: 5000
app.listen(5000, console.log("Listening on port: 5000"))