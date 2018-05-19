//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	//handling ERR
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	 console.log('Connected to MongoDB server');

	//Use the data
	
	// db.collection('Todos').find({
	// 	_id:new ObjectId('5aff15edd78659f6a0c27880')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2))
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err)
	// })

	//Count the collection
	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
		
	// }, (err) => {
	// 	console.log("Unable to fetch todos", err);
	// })

	db.collection('Users').find({name: 'Amine'}).toArray().then((docs) => {
		console.log('Users:');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => console.log('Unable to fetch User', err))

	//db.close();
});