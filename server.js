const express = require('express')

const app = express()
process.loadEnvFile()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html')
})

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html')
})

app.post('/register', (req, res) => {
  res.redirect('/')
})

app.post('/login', (req, res) => {
  res.redirect('/')
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`)
})