import os from 'os'
import cluster from 'cluster'

const runPrimaryProcess = () => {
    const processTotal = os.cpus().length
    for(let i = 0; i < processTotal ; i++ )
        cluster.fork()

    cluster.on('exit', (worker, code, signal) => {
         if(code > 0 && !worker.exitedAfterDisconnect){
            console.log(`Worker ${worker.process.pid} died... schedule another one!`)
            cluster.fork()
        } 
    })
}
const runWorkerProcess = async () => {
    // @ts-ignore
    await import('./server.ts')
}

cluster.isPrimary 
? runPrimaryProcess()
: runWorkerProcess()