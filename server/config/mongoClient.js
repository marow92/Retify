const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const DB_NAME = "myDB";
const COLLECTION_NAME = "testowa";
const password = '4XD4pY5dpGkz6ZKg';
const url = `mongodb+srv://admin:${password}@retifydb-mchwi.mongodb.net/test?retryWrites=true&w=majority`;

// Database Name
const dbName = 'RetifyDB';

const client = {

  getDB: async function () {
    return MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  },

  getCollection: async function() {
    const databaseConnection = await client.getDB();

    return databaseConnection
      .db(DB_NAME)
      .collection(COLLECTION_NAME);
  },

  getAll: async function (req, res) {
    const collection = await client.getCollection();

    collection.find()
      .toArray((function (err, records) {
        if (err) {
          return res.status(500).send("Error getting user");
        } else {
          return res.status(200).send(records);
        }
      }));
  }

}

exports.client = client;