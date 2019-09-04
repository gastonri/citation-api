const connectDb = require('./db-connection');

const app = require('./app');
connectDb();

// http://expressjs.com/en/starter/basic-routing.html
// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// });

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
