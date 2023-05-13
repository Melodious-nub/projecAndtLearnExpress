const express = require('express')
// this is a path import for accessing html files and folder
const path = require('path')
const app = express()
const port = 3000

// this is a for joining public folder into express
app.use(express.static(path.join(__dirname, 'public')))

app.get('/hello', (req, res) => {
  res.send('Hello express!')
})

app.get('/temp', (req, res) => {
  // res.send('this is about page!')
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/json', (req, res) => {
  // res.send('this is about page!')
  // res.sendFile(path.join(__dirname, 'index.html'))
  res.json({name: 'kashem', age: '16', height: '10'})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})