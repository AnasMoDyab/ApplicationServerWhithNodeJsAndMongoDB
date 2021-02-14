const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
passportLocalMongooseEmail = require('passport-local-mongoose-email');


const User = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    email:{
      type: String,
      default: ""
    },
    admin:   {
        type: Boolean,
        default: false
    },

});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);