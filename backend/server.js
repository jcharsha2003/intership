const express = require('express')
const mysql = require('mysql');
const app = express()
const cors= require("cors")
app.use(cors())
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud'
});


app.get('/', (req, res) => {
 
  
    res.send("paata sa headshot");
  
});
 
app.listen(8081, () => {
   console.log('App listening on port 8081')
})
