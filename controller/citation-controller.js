const Quote = require('../model/citation');

const getQuotes = (req, resp) => {
  Quote.find({})
  .then(quotes => {
      resp.status(200).send({ message: 'All good!', quotes});
  })
  .catch(err => {
    resp.status(500).send({message: 'An error has ocurred while trying to obtain the quotes', err});
  });
};

const saveQuote = (req, resp) => {
  const body = req.body;

  const quote = new Quote({
    author: body.author,
    book: body.book
  });

  quote.save()
    .then(quote => {
      return resp.status(200).send({message: 'Saved!', quote});
  })
    .catch(err => {
      return resp.status(500).send({ message: 'An error has ocurred while trying to save the quote', err });
  });
};

const updateQuote = (req, resp) => {
  const body = req.body;
  const id = { 
    "_id": body.id 
  };
  const quote = {
    author: body.author,
    book: body.book
  };
  
  Quote.findOneAndUpdate(id, quote, {
    new: true
  })
  .then(updateQuote => {
    
    if (!updateQuote) {
      updateQuote = {
        message: 'Quote not found.'
      }
    }
    
    resp.status(200).send( updateQuote);
  })
  .catch(err => {
    return resp.status(500).send({ message: 'An error has ocurred while trying to save the quote', err });
  });
};

const deleteQuote = (req, resp) => {
  const id = {
    "_id": req.params.id
  };
  
  Quote.findOneAndDelete(id)
  .then(() => {
    return resp.status(200).send({ message: 'Deleted!' });
  })
  .catch(err => {
    return resp.status(500).send({ message: 'An error has ocurred while trying to delete the quote', err });
  });
};

module.exports = {
  getQuotes,
  deleteQuote,
  saveQuote,
  updateQuote
};
