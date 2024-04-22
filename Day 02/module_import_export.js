const http = require('express');
const app = http()
app.get('/',(req,res)=>{
    res.send('home')
})
app.listen(5000,()=>{
    console.log("Siddhesh")
})