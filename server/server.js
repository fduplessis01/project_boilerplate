const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require("path");
const app = express();
const db = require('../database/index.js'); // mongo db;

const port = process.env.PORT || 3000;
app.use(express.static("dist"));
app.use(cors());
app.use(
  bodyParser.json({
    strict: false
  })
);

  app.get('/readRecord', (req,res) => {
        db.readData({uuid: req.query.uuid}, (err,data) => {
            if(err){
                console.log('error in retrieve data in server side', err);
                res.end();
            } else {
                if(data === null){
                    res.send('Error, cant retrieve record as it does not exist')
                } else {
                    res.send(data)
                    console.log('/retieve data in server side', data)
                }
            }
        })
    });

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
