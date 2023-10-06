const express = require('express');
const cors = require('cors');
const colors = require('colors')
const env = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/error-middleware');

const app = express();

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.get('/customer/list', (req, res) => {
      setTimeout(() => {
            res.send({ 'status': true, "data": data.customerData })
      }, 500);
})

app.use('/product', require('./router/products-router'))


app.use(errorHandler)
app.listen(8080, () => {
      console.log('server listening on port 8080')
})