import { createServer } from 'http'

createServer((req, res) => {
  const key = `${req.method.toLowerCase()}:${req.url.split('?')[0]}`
  if(routes.has(key)) routes.get(key)(req, res)
  res.writeHead(404).end()
}).listen(8080)

const routes = new Map()
const app = new Proxy({}, {
  get: (_,method) => (path, fn) => routes.set(`${method}:${path}`, fn)
})

export { app }