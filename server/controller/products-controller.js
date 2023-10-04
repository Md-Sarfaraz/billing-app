const data = require('../data/data').productsData;
const asyncHandler = require('express-async-handler')


const getProducts = async (req, res) => {
    res.status(200).json({ 'status': true, "data": data })
}

const updateProducts = async (req, res) => {
    res.status(200).json({ 'status': true, "data": `Update Product id : ${req.params.id}` })
}


const saveProducts = async (req, res) => {
    if (!req.body.text) {
        throw new Error('Please add a text field')
    }

    res.status(200).json({ 'status': true, "data": ` Product is Saved` })
}


const findProducts = async (req, res) => {
    res.status(200).json({
        'status': true,
        "data": data.at(req.params.id - 1)
    })
}


const deleteProducts = async (req, res) => {
    res.status(200).json({ 'status': true, "data": `Delete Product id : ${req.params.id}` })
}

module.exports = {
    getProducts,
    findProducts,
    updateProducts,
    saveProducts,
    deleteProducts
}