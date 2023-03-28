import jsonServer from 'json-server'

const PORT = 3001
const server = jsonServer.create()
const router = jsonServer.router('/tmp/db.json')
const middlewares = jsonServer.defaults({ static: './static' })

server.use(middlewares)
server.use(router)

server.listen(PORT, () => console.log(`JSON server is listening PORT ${PORT}`))
