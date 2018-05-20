//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	//handling ERR
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	 console.log('Connected to MongoDB server');
	 //Update Todos
	 // db.collection('Todos').findOneAndUpdate({
	 // 	_id: new ObjectId('5b006016f5012925e243dc05')
	 // },{
	 // 	$set:{completed: true}
	 // },{
	 // 	returnOriginal: false
	 // }).then((result) => {
	 // 	console.log(result)
	 // })
	

	//Update Users
	db.collection('Users').findOneAndUpdate({
			_id: new ObjectId('5b001c5ff5012925e243d3c9')
		}, {
			$set:{
				name: 'Amine'
			},
		
			$inc:{
				age:1
			}
		},{
			returnOriginal: false
		}).then(result => {
		console.log(result)
	})

	db.close();
});