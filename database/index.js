const mongoose = require('mongoose');
const dbdata = require('../data.json')
const fs = require('fs');
const cred = require('./cred.js');
require('dotenv').config();

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;

// const uri = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0-qfpck.mongodb.net/test?retryWrites=true`
// mongoose.connect(uri, {useNewUrlParser: true});

mongoose.connect('mongodb://localhost:27017/Info', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

let Schema = mongoose.Schema;

let infoSchema = new mongoose.Schema ({
    uuid : {
        type: Number,
        unique : true
    },
    name: String,
    openTimes: { 
        sunday: Array,
        monday: Array,
        tuesday: Array,
        wednesday: Array,
        thursday: Array,
        friday: Array,
        saturday: Array
    },
    address: String,
    GPS: {
        x: Number,
        y: Number
    },
    phone: String,
    email: String,
    url: String,
    menu: String,
    category: String,
    photo: String,
    info: String
})
let Info = mongoose.model('Info', infoSchema, 'data');

  let readData = (obj, cb) => {
    Info.findOne(obj,(err,data) => {
      if(err) {
        console.log(err)
      } else {
        cb(null,data)
      }
    })
  }

  let createData = (obj,cb) => {
    Info.create(obj, (err,data) => {
      if(err){
        console.log('error in insert data to DB', err)
      } else {
        console.log('data successfully added to data base', data)
        cb(null,data)
      }
    })
  };

  let updateData = (target, obj,cb) => {
    Info.updateOne(target, obj, (err,data) => {
      if(err) {
        console.log('error in updating data from DB', err);
      } else {
        console.log('data successfully updated in DB', data);
        cb(null,data);
      }
    })
  };

  let deleteData = (obj, cb) => {
    Info.deleteOne(obj, (err,data) => {
      if(err) {
        console.log('error in deleting data from DB', err)
      } else {
        console.log('sucessfully deleted data from DB', data)
        cb(null,data);
      }
    })
  };

  module.exports = {Info, readData, deleteData,  createData, updateData};



// module.exports.seed = ()=>{
//   // we're connected!
//     fs.readFile('data.json', (err, data) => {
//         if (err) throw err;
//         Info.insertMany(JSON.parse(data).map((info)=>{
//             return new Info(info);
//         }), (err, docs)=>{});
//       });
//     }

// ===================

const seed = () => { fs.readFile('data.json', (err, data) => {
    
    let parsedata = JSON.parse(data);
    parsedata.map(e => {
     
    const newInfo = new Info(e)

    newInfo.save()
    .then((response) => {
    console.log(response);
    })
    .catch((error) => {
    console.log(error);
    })
    })
  })}
  
  //seed()