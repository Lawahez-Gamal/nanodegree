var path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors  = require('cors');

const bodyParser = require("body-parser")

const fetch = require('node-fetch');

const mockAPIResponse = require('./mockAPI.js');

const app = express()

dotenv.config();

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

const axios = require('axios')

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

const apiKey = process.env.api_key;

app.post('/sentiment', async(req, res) => {
    try {
        const text = req.body.text;

        const API_URL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&url=${text}&model=general`

        const response = await fetch(API_URL,{
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })  
        const data = await response.json()
       console.log(`responsed data from API: ${data}`)
        const responseData = {
            
            agreement:data.agreement,
            confidence: data.confidence,
            irony: data.irony,
            subjectivity: data.subjectivity
        }
        res.send(responseData)
        console.log(data)
    } catch (e) {
        console.log(`error ${e}`)
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

module.exports = app;
