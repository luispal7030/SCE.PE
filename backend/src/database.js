const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
? process.env.MONGODB_URI
: 'mongodb://localhost:27017/test';

mongoose.connect(URI, {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
}); 