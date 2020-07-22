/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const models = require('../models/cardsModel');


const cardsController = {};

cardsController.addCard = (req, res, next) => {
    models.Card.create({
    word: req.query.word,
    definition: req.query.definition,
  })
    .then(() => next())
    .catch((err) => next(err));
};

cardsController.getCards = (req, res, next) => {
  models.Card.find()
  .then((cards) => {
    res.locals = cards;
    return next();
  })
  .catch((err) => next(err));
};

// add delete and update card

cardsController.deleteCard = (req, res, next) => {
  models.Card.findOneAndDelete({ word: req.query.word })
  .then(() => next())
  .catch((err) => next(err));
};

cardsController.updateCard = (req, res, next) => {
  models.Card.findOneAndUpdate({ word: req.query.word }, { definition: req.query.definition })
  .then((cards) => {
    res.locals = cards;
    return next();
  })
  .catch((err) => next(err));
};


module.exports = cardsController;
