const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    cart: [{type: Schema.Types.ObjectId, ref: 'product'}]
},{
    timestamps: true,
    versionkey: false
});


module.exports = model('user',userSchema);