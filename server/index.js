const express = require('express');
const cors = require('cors');
const env = require('dotenv')
const { errorHandler } = require('./middleware/error-middleware');

const app = express();

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