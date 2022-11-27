const express = require('express')

const app = express()
const cookieParser = require('cookie-parser');
const connectToMongo = require ("./db/conn");
connectToMongo();
const dotenv = require("dotenv")
dotenv.config({ path: './config.env'})
const port = process.env.PORT

app.use(express.json());
app.use(cookieParser())
app.use('/', require('./router/auth'))


// app.get("/about", middleware,(req, res) => {
//     res.send(`Hello world about`);
// });
// app.get("/contact", (req, res) => {
    
//     res.send(`Hello world contact`);
// });

// app.get("/register", (req, res) => {
//     res.send(`Hello world register`);
// });
// app.get("/signin",(req, res) => {
//     res.send(`Hello world signin`);
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  