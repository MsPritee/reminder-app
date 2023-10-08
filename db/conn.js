const mongoose = require('mongoose');
// const dbURI = 'mongodb://localhost:27017/myuserdb';
const dbURI = 'mongodb://127.0.0.1:27017/myuserdb';


mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // createIndexes: true,
    // serverSelectionTimeoutMS: 50000, // Increased timeout to 50 seconds
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.error(`MongoDB connection error:`, e);
});


