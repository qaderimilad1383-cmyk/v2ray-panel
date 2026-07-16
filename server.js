const express = require("express");
const cors = require("cors");
const {v4:uuid}=require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

let users=[];


app.post("/users",(req,res)=>{

let user={
id:Date.now(),
name:req.body.name,
uuid:uuid(),
expire:req.body.expire
};

users.push(user);

res.json(user);

});


app.get("/users",(req,res)=>{
res.json(users);
});


app.get("/",(req,res)=>{
res.send("V2Ray Panel Running");
});


app.listen(process.env.PORT || 3000,()=>{
console.log("Running");
});
