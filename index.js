// Dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const ListingController = require('./controllers/ListingController');
const userController = require('./controllers/UserController');

// Forward all requests to localhost:8000/listing to the listing controller
app.set('port', process.env.PORT || 8000);

// Parses key value pairs in request
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (request, response) => {
	response.redirect('/listing');
});

// Log each request as it comes in for debugging
const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

// Controller
app.use('/listing', ListingController);
app.use('/', userController);

// The catch all for handling errors
const { handleErrors } = require('./middleware/custom_errors');
app.use(handleErrors);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
