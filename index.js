const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('the server is running')
})

app.listen(port,()=>{
    console.log(`this server is running on port : ${port}`)
})