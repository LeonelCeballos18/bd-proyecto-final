const express = require('express')
const app = express()
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.listen(3000)
