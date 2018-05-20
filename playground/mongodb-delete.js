//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	//handling ERR
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	 console.log('Connected to MongoDB server');

	//DeleteMany
		// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
		// 	console.log(result);
		// });

		// db.collection('Users').deleteMany({name:'Amine'}).then(result => {
		// 	console.log(result)
		// })
	//DeleteOne "delete the first one if i have mulit"
		// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
		// 	console.log(result)
		// })
	//FindOneAndDelete
		// db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
		// 	console.log(result)
		// })

		db.collection('Users').findOneAndDelete({_id: new ObjectId('5b00653ef5012925e243dd10')}).then(result => {
			console.log(JSON.stringify(result, undefined, 2))
		})

	db.close();
});