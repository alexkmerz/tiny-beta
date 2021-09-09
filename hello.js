import { app } from './http.js'

app.get('/', (req, res) => {
  res.writeHead(200)
  res.end('hello world')
})

app.get('/hello', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({
    data: 'Hello World!'
  }))
})