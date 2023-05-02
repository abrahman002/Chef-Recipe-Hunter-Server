const express =require('express')
const app=express()
const port=4000;
const cors=require('cors')
const recipe=require('./data/chef.json')

app.use(cors());

app.get('/recipe',(req,res)=>{
    res.send(recipe);
})





app.get('/recipe/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const selectedRecipe=recipe.filter(n => parseInt(n.id) === id)
    res.send(selectedRecipe)
})
app.get('/',(req,res)=>{
    res.send('Chef-Recipe-Hunter In On.....')
})

app.listen(port,()=>{
    console.log(`Chef-Recipe-Hunter-Server Port running ..${port}`)
})