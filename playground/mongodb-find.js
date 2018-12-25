//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err , client)=> {
    
    var db = client.db('TodoApp2');
   
    if(err){
        return console.log('Unable to connect to MongoDB server');

    }
    console.log('Connected to MongoDB server');  

    //     db.collection('Todos').find({_id: new ObjectID('5ba352664029506677712904')}).toArray().then((docs) => {
//          console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Unable to fetch todos' , err);
//      });

//     db.collection('Users').find().count().then((count) => {
//        console.log('Todos count :' + count);
      
//      }, (err) => {
//    console.log('Unable to fetch todos' , err);
//     });


//   db.collection('Users').find({name:'Aadhil'}).toArray().then((docs) => {
//       console.log(JSON.stringify(docs, undefined, 2));

//   });

db.collection("Users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
   // db.close();
  });
    
}); 

