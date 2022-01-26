const express = require('express');
const Listing = require('../backend/models/Listing.js');

const router = express.Router();

// Index: Get all listings
// http://localhost:3000/listing/

router.get('/', (req, res) => {
	Listing.find({}).then((tool) => {
		res.json(tool);
	});
});

// Create: Add a listing
// http://localhost:3000/listing/
router.post('/', (req, res) => {
	Listing.create(req.body).then((tool) => {
		res.status(201).json(tool);
	});
});

// Read: Get one listing by id
// http://localhost:3000/listing/id
router.get('/:id', (req, res) => {
	Listing.findById({ _id: req.params.id }).then((tool) => {
		res.json(tool);
	});
});

// Update: Edit a listing by id
// http://localhost:3000/listing/id
router.put('/:id', (req, res) => {
	Listing.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((tool) => {
		res.json(tool);
	});
});

// Delete: Remove an listing by id
// http://localhost:3000/listing/id
router.delete('/:id', (req, res) => {
	Listing.findByIdAndDelete({ _id: req.params.id }).then((deletedTool) => {
		res.json(deletedTool);
	});
});

module.exports = router;
