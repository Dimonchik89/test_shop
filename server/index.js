require("dotenv").config();
const express = require("express");
const router = require("./routes/index");
const sequelize = require("./db");
const models = require("./models/models");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use('/api', router)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch(e) {
        console.log(e);
    }
}

start()