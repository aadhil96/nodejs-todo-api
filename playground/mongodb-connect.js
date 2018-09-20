//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err , client)=> {
    
    var db = client.db('TodoApp2');
   
    if(err){
        return console.log('Unable to connect to MongoDB server');

    }
    console.log('Connected to MongoDB server');  

//     db.collection('Todos').insertOne({
//         text : 'Something to do',
//         completed : false
//    } ,(err , result)=> {
//     if(err){
//        return console.log('Unable to insert todo', err);
//      }
//      console.log(JSON.stringify(result.ops, undefined,2));
//  });

  db.collection('Users').insertOne({
      name : 'Aadhil',
      age : 20,
      location : 'Sri Lanka'
  },(err,result)=> {
      if(err){
          return Console.log('Unable to insert todo ' + err);

      }
      //console.log(JSON.stringify(result.ops , undefined , 2));
      console.log(result.ops[0]._id);
  }
  )

  

    
}); 

