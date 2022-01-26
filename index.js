// Dependencies
const express = require('express');
const cors = require('cors');
const app = express();
const ListingController = require('./ListingController');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (request, response) => {
	response.redirect('/listing');
});

// Controller
app.use('/listing', ListingController);

// Forward all requests to localhost:3000/listing to the listing controller
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
