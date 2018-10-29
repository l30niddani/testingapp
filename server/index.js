const experss = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const Users = require('./controllers/users');
const port = 4000;

const app = experss();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.post("/api/login", Users.getUsers);
app.post("/api/register", Users.setUsers);

app.listen(port,function () {
    console.log("server listening on port : "+port);
})