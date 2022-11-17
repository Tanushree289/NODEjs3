const express = require('express');
const app = express();

const middleware1 = (req,res,next)=>{
    console.log("middlleware1");
    next();
}

const middleware2 = (req,res,next)=>{
    console.log("middlleware2");
    next();
}

app.use(middleware2);

app.get('/',(req,res)=>{
    console.log("home page");
    res.write("welcome");
    res.end();
})

app.get('/link1',middleware1,(req,res)=>{
    res.write("<h1>Link1 with middleware 1 and 2</h1>")
    res.end();
})

app.get('/link2',(req,res)=>{
    res.write("<h1>Link2 with middleware2</h1>")
    res.end();

})

app.get('/link3',(req,res)=>{
    res.write("<h1>Link3 with middleware2</h1>")
    res.end();

})

app.get('/link4',middleware1,(req,res)=>{
    res.write("<h1>Link4 with middleware 1 and 2</h1>")
    res.end();

})

app.listen(4000,()=>{
    console.log("server started....");
})