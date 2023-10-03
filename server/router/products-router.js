const express = require('express')
const router = express.Router();
const {
    getProducts,
    findProducts,
    updateProducts,
    saveProducts,
    deleteProducts
} = require('../controller/products-controller')


router.get('/', getProducts)

router.get('/:id', findProducts)

router.post('/', saveProducts)

router.put('/:id', updateProducts)

router.delete('/:id', deleteProducts)

module.exports = router