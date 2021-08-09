const express = require("express")
const app = express() 
const port = 5000
// const path = require('path')
// const router = express.Router()

app.use(express.static(__dirname + '/public'));

const verifTime = function (req,res,next){
    const Datenow= Date(Date.now())
    const arr=Datenow.split(' ')
    const day= arr[0]
    const time= arr[4].split(':')
    console.log(+time[0])
    if ((day==="Fri" || day==="Sat" || day === "Sun" || +time[0] > 17 || +time[0] < 9 )){
        res.send("<h3> The website is currently offline</h3>")
    } else {
        next();
    };
}

app.use(verifTime)

app.get('/', function(req,res) {
    res.sendFile("Home.html", {root:__dirname})
})
app.get('/Contact', function(req,res){
    res.sendFile("Contact.html", {root:__dirname})
})
app.get('/Services', function(req,res){  
    res.sendFile("Services.html", {root:__dirname})
})

app.listen(port , (err) => {
    if (err) {
        console.log('Error while connecting')
    }else {

        console.log('server connected successfuly @ : ', port)
    }
    
})