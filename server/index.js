const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host:"localhost",
    user:'root',
    password:'password',
    database:'wf'
})

const porta = 3001

app.get('/', (req,res) => {
    db.query('INSERT INTO cafeManha (prot,carbo,gord,kcal,nome) VALUES (10,15,2,230,"Frango")')
})

app.listen(porta, () =>{
    console.log('teste')
})