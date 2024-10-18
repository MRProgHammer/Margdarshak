import express from "express";

const app = express()

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
        res.send("namaste ji")
})

app.listen(port,()=>{
    console.log(`connected to http://localhost:${port}`)
})

