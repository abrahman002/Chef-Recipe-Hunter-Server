const express =require('express')
const app=express()
const port=4000;
// const cors=require(cors)

// app.use(cors());

app.get('/',(req,res)=>{
    res.send('Chef-Recipe-Hunter In On.....')
})

app.listen(port,()=>{
    console.log(`Chef-Recipe-Hunter-Server Port running ..${port}`)
})