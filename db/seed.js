const mongoose = require('./connection');
const seedData = require('./seeds.json');
const Listing = require('../models/Listing');

Listing.deleteMany({})
	.then(() => {
		console.log('all listings deleted');
		return seedData.map((listing) => {
			return { ...listing };
		});
	})
	.then((listing) => {
		return Listing.insertMany(listing);
	})
	.then((newListing) => {
		console.log('created new listings', newListing);
	})
	.catch((err) => console.error(err));
