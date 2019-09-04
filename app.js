const citationController = require('./controller/citation-controller');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.get('/', citationController.getQuotes);
app.delete('/quote/:id', citationController.deleteQuote);
app.post('/quote', citationController.saveQuote);
app.put('/quote', citationController.updateQuote);


module.exports = app;