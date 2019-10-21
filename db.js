const express =require('express')
var app=express()
var async = require('async');

var mysql=require('mysql')
var bodyParser=require('body-parser')
app.use(bodyParser.json({type:'application/json'}))
app.use(bodyParser.urlencoded({ extended: false }))

const connection=mysql.createConnection({
    host:'localhost',
    database:'blogdb',
    password:'',
    user:'root',
    multipleStatements: true

})

connection.connect(function (err){

 if(err){
     console.log(err)
 }
 else{
     console.log('connected')
 }

})



app.get('/show',function(req,res){
 connection.query(`SELECT * from BLOGS`,function(err,feilds,rows){
     if(err){
         console.log(err)

     }else {
         console.log(feilds)
         res.send(feilds)

     }
 })
})
app.post('/update',function(req,res){
    console.log(req.body.id)
    connection.query(`INSERT INTO BLOGS VALUES(${req.body.id},'${req.body.blog_title}','${req.body.blog_content}')`,function(err,rows){
        if(err){
            console.log(err)

        }
        else{
            console.log('inserted')
            console.log(rows)

        }
    })
})





//register
app.post('/register',function(req,res) {


    connection.query(  `create table ${req.body.nickname} 
    (name varchar(20),
    password varchar(20),
    email varchar(20),
    phone int
    
     
     )`,function(err,rows){
        if(err){
            console.log(err)

        }
        else{
            console.log('table creacted')
        }
    })




    connection.query(`INSERT INTO ${req.body.nickname} values('${req.body.nickname}','${req.body.password}','${req.body.email}',${req.body.phones})`,function(err,rows,feilds){
        if(err){

            console.log(err)

        }
        else{
            console.log('inserted into',req.body.nickname)
        }
        }
    )



})
var someVar = [];
app.post('/login',function(req,res){

   var out= connection.query(`SELECT name FROM ${req.body.loginname}`,function (err,rows,feild){
            if(err){
                console.log(err)
            }
            else{
                console.log('fetched'+out)
                setValue(rows)
            }
    }

    )

})

function setValue(value) {
    someVar = value;
    console.log(someVar);
}









app.post('/register',function(req,res){
    connection.query(`INSERT INTO '${req.body.nickname}' values('${req.body.nickname}','${req.body.password}','${req.body.email}',${req.body.phones})`,function(err,rows,feilds)
    {
        if(err){
            console.log(err)

        }
        else{
            console.log('inserted into'+req.body.nickname)
            res.send(rows)
        }
    })







})






app.listen(3000,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('connect')
    }
})