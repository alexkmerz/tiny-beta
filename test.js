import { app } from './lib/http'

app.get('/test1/', (req, res) => {
  res.writeHead(200)
  res.end('hello 1 world')
})

app.get('/test1/hello', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({
    data: 'Hello 1 World!'
  }))
})