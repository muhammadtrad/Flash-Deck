const express = require('express');
const cardsController = require('../controllers/cardsController');

const router = express.Router();

router.post('/addCard', cardsController.addCard,
  (req, res) => res.status(200).json('Success!'));

router.get('/getCards', cardsController.getCards,
  (req, res) => res.status(200).json(res.locals));

router.post('/deleteCard', cardsController.deleteCard,
  (req, res) => res.status(200).json('Success!'));

router.post('/updateCard', cardsController.updateCard,
  (req, res) => res.status(200).json('Success!'));


module.exports = router;
