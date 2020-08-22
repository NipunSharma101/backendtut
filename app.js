const express = require("express") 
const path = require("path")
// the abouve line imports express into this app

// EXPRESS SPECIFIC STUFF
const app = express();
const port = 600;

// PUG SPECIFIC STUFF
app.use('/static', express.static('static'))// this serves static files


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

app.listen(port, ()=>{
    console.log(`this application started successfully on ${port}`)// the line below will continuously listen to the commands above and will display on the port. act as a bridge between the two.
})