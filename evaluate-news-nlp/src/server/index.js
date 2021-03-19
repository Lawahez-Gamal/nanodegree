const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const cors  = require('cors');
const mockAPIResponse = require('./mockAPI.js');


const app = express()

app.use(express.static('dist'))

app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post("/sentiment",async(req,res)=>{
    try{
        const url = req.params[0];

        api_url = "https://api.meaningcloud.com/sentiment-2.1";

        apiKey = process.env.api_key;

        const Res = await axios.get(`${api_url}?key=${apiKey}&url=${url}&lang=en`);

        const{ agreement,subjectivty,confidence,irony} = Res.data;

        res.send({ agreement,subjectivty,confidence,irony});
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
