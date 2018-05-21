const mongoose = require('mongoose');

//Creat the model
let Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength:1,
		trim: true //remove space in the both ends text
	},
	completed:{
		type: Boolean,
		default:false
	},
	completedAt:{
		type: Number,
		default: null
	}
});

module.exports = {Todo}















//Create new todo
// let newTodo = new Todo({
// 	text: "Cook dinner"
// });

//Save todo
// newTodo.save().then((doc) => {
// 	console.log('Save todo', doc)
// }, (err) => {
// 	console.log('Unable to save todo')
// });

// let newTodo = new Todo({
// 	text: 'Todo Somthing now',
// 	completed: false
// });

// let otherTodo = new Todo({
// 	text: 
// })
// otherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2))
// }, (err) => {
// 	console.log('Unable to save data', err)
// });