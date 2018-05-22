const mongoose = require('mongoose')
const { Schema } = mongoose

const pollSchema = new Schema({
	title:{type: String, required: true},
	options: [{
    name: {type: String, required: true},
    votes: {type: Number, required: true, default: 0},
}],
	_user:{type:Schema.Types.ObjectId,ref:'User'}
})

mongoose.model('polls', pollSchema)