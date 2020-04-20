const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const DB_NAME = "myDB";
const COLLECTION_NAME = "testowa";
const password = '4XD4pY5dpGkz6ZKg';
const url = `mongodb+srv://admin:${password}@retifydb-mchwi.mongodb.net/test?retryWrites=true&w=majority`;

// Database Name
//const dbName = 'RetifyDB';

const client = {

  getDB: async function () {
    return MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  },

  getCollection: async function(collectionName) {
    const databaseConnection = await client.getDB();

    return databaseConnection
      .db(DB_NAME)
      .collection(collectionName);
  },

  getAll: async function(req, res) {
    const collection = await client.getCollection("testowa");

    collection.find()
      .toArray((function (err, records){
        if (err) {
          return res.status(500).send("Error getting user");
        } else {
          return res.status(200).send(records);
        }
      }));
  },

  userExists: async function (req, res) {
    const collection = await client.getCollection("UserCredentials");
    console.log(req.query)

    collection.find(req.query)
      .toArray((function (err, records){
        if (err) {
          return res.status(500).send("Error getting user");
        } else {
          console.log(records);
          if(records.length != 0){
            return res.status(200).send(true);
          }else{
            return res.status(200).send(false);
          }
        }
      }))
  },

  createEntryInCollection: async function(req, res) {
    const collection = await client.getCollection("testowa");

    console.log(req.body)
    collection.insertOne(req.body, function(err, db){
      if(err){
        return res.status(500).send("Error inserting data");
      }else{
        console.log("1 document inserted into ");
        return res.status(200).send("")
      }
    })
  },

  createEntriesInCollection: async function(req, res) {
    const collection = await client.getCollection("testowa");

    console.log(req.body)
    collection.insertMany(req.body, function(err, db){
      if(err){
        return res.status(500).send("Error inserting data");
      }else{
        console.log("1 document inserted into ");
        return res.status(200).send("")
      }
    })
  },
}

exports.client = client;