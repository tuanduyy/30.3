var express = require('express')
var hbs = require('hbs')

var app = express()

//add img
var img = require('path').join(__dirname,'/img');
app.use(express.static(img));

var bodyParser = require("body-parser");
const { response } = require('express');
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'hbs')

//goi den trang dang ky
app.post('/sendDangky', (req,res) => {
    let nameValue = req.body.txtName;
    let genderValue = req.body.gender;
    let userInfo = {name:nameValue, gender:genderValue}
    res.render('confirm', {model:userInfo})
    // res.write('Name: ' + nameValue)
    // res.write('\nGender: ' + genderValue);
    // res.end();
})

//chuyen den trang dang ky
app.get('/register',(req, res) => {
    res.render('dangky')
})

//go to index
app.get('/',(req, res)=>{
    res.render('index')
})

var PORT = process.env.PORT || 3000
app.listen(PORT)
console.log('server is running on: ', PORT)