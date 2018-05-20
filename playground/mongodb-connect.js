//const MongoClient = require('mongodb').MongoClient;

//obj restructuring
// let user = {name: 'amine', age: 22};
// let {name} = user;
// console.log(name)


const {MongoClient, ObjectId} = require('mongodb');

let obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');
//Insert Data 
	// db.collection('Todos').insertOne({
	// 	text: 'Somthing to do ',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// });

	db.collection('Todos').insertOne({
		name:'Amine',
		age:'33',
		location: 'Mourouj'
	}, (err, result) => {
		if(err){
			return console.log('User not add', err)
		}
		console.log(JSON.stringify(result.ops, undefined, 2))
	});

	db.close();
});