const express = require("express") 
const path = require("path")
// the abouve line imports express into this app

const app = express();
const port = 600;

// this serves static files
app.use('/static', express.static('static'))

//  set the template engine
app.set('view engine', 'pug')

// set the views directory
app.set('views', path.join(__dirname, 'views'))

// app.get("/", (req, res) => {
//     res.send("this is my first express app");
// });

// our pug demo endpoint
app.get('/demo',  (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
  })

app.get("/", (req,res)=>{
      res.status(200).send("this is homepage of my first express app")
  })

// the below line will send post request and the above line will send get request

app.get("/about", (req, res) => {
    res.send("this is my about express app");
});

app.get("/contact", (req, res) => {
    res.send("this is my contact express app");
});

// app.get("/this", (req, res) => {
//     res.get("this page is not found. error 404.")
// })

// the line below will continuously listen to the commands above and will display on the port. act as a bridge between the two.
app.listen(port, ()=>{
    console.log(`this application started successfully on ${port}`)
})