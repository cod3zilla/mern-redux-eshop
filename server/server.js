const express=require('express')


const app=express()


app.get('/', (req, res)=>{
  res.send('Hello World..!!!!')
})


const PORT=process.env.PORT
app.listen(process.env.PORT||5000,()=>console.log(`server is up on:${PORT}`))

