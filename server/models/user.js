const mongoose = require('mongoose');
 
//Create User model
let Users = mongoose.model('Users', {
	email:{
		type:String,
		required: true,
		minlength: 1,
		trim: true
	}
});

module.exports = {Users}











//User Model
//email - require it - trim it - set type -set min length of 1


// let user = new Users({
// 	email: 'kanzariamine@hotmail.com    '
// });

// user.save().then((data) => {
// 	console.log(JSON.stringify(data, undefined, 2));
// }, (err) => {
// 	console.log('Unable de save', err)
// });
