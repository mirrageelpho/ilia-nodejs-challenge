const processID = process.pid
const port = process.env.PORT
import app from "./app"

const server = app.listen(port, () => {
    console.log(`Started on process: ${processID}, port: ${port}`)
})

process.once('SIGTERM', ()=>{
    console.warn('server ending on ', new Date().toISOString())
    server.close(()=>process.exit())
})
