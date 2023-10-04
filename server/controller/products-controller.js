const data = require('../data/data').productsData;

const getProducts = (req, res) => {
    res.status(200).json({ 'status': true, "data": data })
}

const updateProducts = (req, res) => {
    res.status(200).json({ 'status': true, "data": `Update Product id : ${req.params.id}` })
}


const saveProducts = (req, res) => {
    if (!req.body.text) {
        throw new Error('Please add a text field')
    }

    res.status(200).json({ 'status': true, "data": ` Product is Saved` })
}


const findProducts = (req, res) => {
    res.status(200).json({
        'status': true,
        "data": data.at(req.params.id - 1)
    })
}


const deleteProducts = (req, res) => {
    res.status(200).json({ 'status': true, "data": `Delete Product id : ${req.params.id}` })
}

module.exports = {
    getProducts,
    findProducts,
    updateProducts,
    saveProducts,
    deleteProducts
}