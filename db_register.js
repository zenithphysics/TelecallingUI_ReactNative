const mysql=require('mysql')
const bodyParser=require('body-parser')
const express=require('express')
const app=express()

app.use(bodyParser.json({type:'application/json'}))
app.use(bodyParser.urlencoded({ extended: false }))


const ct=mysql.createConnection({
    host:'localhost',
    password:'',
    user:'root',
    database:'blogdb'
})

ct.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('connected')
    }

})


app.post('/register',function(req,res){
    ct.query(`create table '${req.body.name}'('${req.body.name}' varchar(50)`,function(err,rows,feilds){
        if(err){
            console.log(err)
        }
        else{
            console.log('table created')
        }

    })
})

app.listen(3000)
