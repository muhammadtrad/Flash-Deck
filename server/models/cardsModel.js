/* eslint-disable no-console */
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://username:tbrAfw2GXOzKrTYI@cluster0.j5gpu.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'cards',
})
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const cardSchema = new Schema({
  word: String,
  definition: String,
});

const Card = mongoose.model('card', cardSchema);

module.exports = {
  Card,
}