const Hapi = require('@hapi/hapi')
const mainRouting = require('./main_routings')

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })
  server.route(mainRouting)
  await server.start()
  console.log(`Server berhasil dibuat di ${server.info.uri}`)
}
init()
