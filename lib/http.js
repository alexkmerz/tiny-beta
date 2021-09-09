import { createServer } from 'http'

createServer((req, res) => {
  const key = `${req.method.toLowerCase()}:${req.url.split('?')[0]}`
  if(routes.has(key)) return routes.get(key)(req, res)
  routes.get('404')(req, res)
}).listen(8080)

const routes = new Map()

routes.set('404', (_,res) => {
  res.writeHead(404)
  res.end('404')
})

const app = new Proxy({}, {
  get: (_,method) => (path, fn) => routes.set(`${method}:${path}`, fn)
})

export { app }