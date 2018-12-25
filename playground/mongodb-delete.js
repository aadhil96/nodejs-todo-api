//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err , client)=> {
    
    var db = client.db('TodoApp2');
   
    if(err){
        return console.log('Unable to connect to MongoDB server');

    }
    console.log('Connected to MongoDB server');  

     db.collection('Users').deleteMany({name:'Aadhil'});

    //  db.collection('Users').findOneAndDelete({_id:new ObjectID('5ba34dd4638d6f1b8431a4f6')}).then((result)=> {
    //      console.log(JSON.stringify(result,undefined, 2));
    //  });


    


    //  db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=> {
    //     console.log(result);
    //  });


    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });

    // delete many
    // db.collection('Users').deleteMany({text:'Aadhil'}).then((result)=> {
    //     console.log(result);
    // })
}); 

