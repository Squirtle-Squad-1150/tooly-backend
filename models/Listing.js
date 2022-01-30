const mongoose = require('../db/connection');

const ListingSchema = new mongoose.Schema({
	tool: String,
	image: String,
	description: String,
	brand: String,
	model: String,
	condition: String,
	cordless: String,
	category: String,
	price: Number,
	location: String,
	available: {type: String, default: 'true'},
	reserve: []
});

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
