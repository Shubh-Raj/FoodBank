const mongoose = require('mongoose'); 

console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/foodbankv1'); 

module.exports = mongoose.connection; 



