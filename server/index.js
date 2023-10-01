const express = require('express');
const cors = require('cors');
const data = require('./data/data');

const app = express();
app.use(cors())

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.get('/customer/list', (req, res) => {
      res.send({
            'status': true,
            "data": data.customerData
      })
})

app.get('/product/list', (req, res) => {
      res.send({
            'status': true,
            "data": data.productsData
      })

})


app.listen(8080, () => {
      console.log('server listening on port 8080')
})