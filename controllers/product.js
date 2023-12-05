const { createdBName } = require("../config/dbConfig");
const { createProductModel } = require("../modals/product")

exports.addProduct = async (req, res, next) => {
    console.log(req.body.price);
    try {
        const dynamicDbName = `parth_db_${req.query.dbName}`;
        const newModelName = "products";
        const newdBName = createdBName(dynamicDbName);
        await newdBName.sync();
        const Product = createProductModel(newdBName, newModelName);

        let info = {
            name: req.body.name,
            price: req.body.price,
            deprecation: req.body.deprecation
        }

        // console.log(info);

        await Product.create(info)
            .then(response => {
                res.status(200).send(response)
                console.log("fdghfhg" + response);
            }).catch(error => {
                res.status(404).send(error)
            })
    } catch (err) {
        return res.status(500).send(err)
    }
}

exports.listProduct = async (req, res, next) => {
    try {
        const dynamicDbName = `parth_db_${req.query.dbName}`;
        const newModelName = "products";
        const newdBName = createdBName(dynamicDbName);
        await newdBName.sync();
        const Product = createProductModel(newdBName, newModelName);

        const users = await Product.findAll();
        res.json(users);
    } catch (error) {
        return res.status(500).send(error)           
    }
}