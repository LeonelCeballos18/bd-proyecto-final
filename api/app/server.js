const express=require('express');
const app = express()
const cors=require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

const router = require('../routes');
app.use(router);
app.listen(3000,()=>{
    console.log("DB escuchando en el puerto 3000");
}); 