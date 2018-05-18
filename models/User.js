const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
	google: {
		id: String,
		name: String
	},
	github: {
		id: String,
		name: String
	},
	twitter: {
		id: String,
		name: String
	}
})

mongoose.model('users', userSchema)