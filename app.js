const express = require("express") 
// the abouve line imports express into this app

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("this is my first express app");
});

app.get("/ about", (req, res) => {
    res.send("this is my about express app");
});

app.get("/ contact", (req, res) => {
    res.send("this is my contact express app");
});
app.listen(port, ()=>{
    console.log(`this application started successfully on ${port}`)
})