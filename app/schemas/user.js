const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	username: {
		unique: true,
		type: String
    },
	userid: Number,
	password: String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

UserSchema.pre('save', function(next) {
	if(this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now();
	} 
	else {
		this.meta.updateAt = Date.now();
	}
	next();
})

module.exports = UserSchema;
