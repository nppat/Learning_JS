// require mongoose
var mongoose = require('mongoose');

// Create Mongoose Schemas
var PodSchema = new mongoose.Schema({
	name: String,
	age: Number,
	length: String,
	weight: String
}, {timestamps: true})

// We are setting this Schema in our Models as 'PodMember'
mongoose.model('PodMember', PodSchema);