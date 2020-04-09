const mongodb = require('mongoose');

const productSchema = mongodb.Schema({

    _id:                    mongodb.Schema.Types.ObjectId,
    name:                   { type: String, required: true, unique: true },
    desc:                   { type: String, required: true },
    short:                  { type: String, required: true },
    price:                  { type: String, required: true },
    status:                 { type: Boolean, required: true },                 
    image:                  { type: String, required: true },                 
                   

    created:                { type: Date, default: Date.now },
    modified:               { type: Date, default: Date.now }

})

module.exports = mongodb.model("Product", productSchema)