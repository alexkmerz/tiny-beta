import { createServer } from 'http'

createServer((req, res) => {
  const { pathname: path } = new URL(req.url, `http://${req.headers.host}`)
  const method = req.method.toLowerCase()
  const key = `${method}:${path}`
  if(app.has(key)) app.get(key)(req, res)
  res.writeHead(404).end()
}).listen(8080)

const app = new Map()
const router = new Proxy({}, {
  get: (_,method) => (path, fn) => app.set(`${method}:${path}`, fn)
})

export { router }