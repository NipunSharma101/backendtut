const express = require("express") 
const path = require("path")
// the abouve line imports express into this app
const fs = require("fs");
const app = express();
const port = 600;



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))// this serves static files
app.use(express.urlencoded()) //this will act as the cave that will get the data submitted on the frontend to us
// the above line is called middleware and helps getting the form data to express.

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')//  set the template engine
app.set('views', path.join(__dirname, 'views'))// set the views directory



//ENDPOINT
// we are sending this content written below to the html which is renderd online
// this is the glitch in the matrix DARK, this connects both, the front end and the backend. 
app.get('/', (req,res)=>{
    const con = "this is the best content available in the market"
    const params = {'title': 'pug is a good dog', "content": con}
    res.status(200).render('index.pug', params)

})

app.post('/', (req, res)=>{
    // console.log(req.body)
    name = req.body.name
    age = req.body.age
    address = req.body.address
    more = req.body.more
    let outputToWrite = `name of the client is ${name} age ${age}, ${address}, ${more}`
    fs.writeFileSync('output.txt', outputToWrite )
    const params = {'message': 'your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})

app.listen(port, ()=>{
    console.log(`this application started successfully on ${port}`)// the line below will continuously listen to the commands above and will display on the port. act as a bridge between the two.
})