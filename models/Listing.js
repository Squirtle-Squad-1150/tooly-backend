const mongoose = require('../db/connection');

const ListingSchema = new mongoose.Schema({
	title: String,
	image: String,
	description: String,
	brand: String,
	model: String,
	condition: String,
	cordless: Boolean,
	category: String,
	price: Number,
	location: String,
	available: Boolean,
});

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
