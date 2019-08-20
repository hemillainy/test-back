const mongoose = require('mongoose');

mongoose.connect('mongodb://upplify:upplify123@ds211268.mlab.com:11268/upplify', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;