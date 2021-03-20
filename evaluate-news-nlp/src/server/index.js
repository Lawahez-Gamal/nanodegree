var path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors  = require('cors');

const bodyParser = require("body-parser")

const fetch = require('node-fetch');

const mockAPIResponse = require('./mockAPI.js');

const app = express()

dotenv.config();

app.use(cors())

app.use(express.json())

app.use(bodyParser.json())

const axios = require('axios')

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('dist'))



console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


app.post("/sentiment",async(req,res)=>{

    try{
        const url = req.body.text;

        apiKey = process.env.api_key;

        api_url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en&model=general`;

        const resp = await fetch(api_url,{
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }) 
        
        const data =  resp.json()
        console.log(`responsed data : ${data}`)

         const resData = {
            
             agreement:data.agreement,
             confidence: data.confidence,
             irony: data.irony,
              subjectivity: data.subjectivity
            
         }
         res.send(resData)
         console.log(data)
    }
    catch(e){
        console.log(e);
        res.status(500).send("There is an error"+e);
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
