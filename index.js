const express=require('express')
const cors=require('cors')
const userRoutes=require('./routes/userRoutes')
const app=express()

app.use(cors({
    origin:"*"
}))
app.use(express.json())  //inbuilt body-parser

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.use('/api',userRoutes)

app.listen(5001,()=>{
    try{
        console.log('server is running at 5001 port number')
    }
    catch(err){
        console.log(err,'error occurred')
    }
})