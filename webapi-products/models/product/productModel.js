const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.addProduct = (req, res) => {
   
    Product.find({ name: req.body.name })
    .then(exists => {
        if (exists > 0) {
                return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Product with the same name already exists.'
            })

            
        } else {
            const product = new Product(
                {
                    _id:                    new mongodb.Types.ObjectId,
                    name:                   req.body.name,
                    desc:                   req.body.desc,
                    short:                  req.body.short,
                    price:                  req.body.price,
                    status:                 req.body.status,
                    image:                  req.body.image
                }
            )
                product.save()
                .then(() => {
                res.status(201).json({
                        statusCode: 201,
                        status: true,
                        message: 'Product was successfully added.'
                    })
                })
                .catch(() => {
                    return res.status(500).json({
                        statusCode: 500,
                        status: false,
                        message: 'Unable to add product. Please contact the system administrator.'
                })
            })
        
        }
    })
}

exports.getProducts = (req, res) => {
    Product.find().then(data => {
        res.status(200).json(data)
    })
}

exports.getProductById = (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(data => {
        res.status(200).json(data)
    })
}

