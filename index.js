const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello express!')
})

app.get('/temp', (req, res) => {
  // res.send('this is about page!')
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/json', (req, res) => {
  // res.send('this is about page!')
  // res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})