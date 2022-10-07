// arch, cpus.length, cluster.isMaster,

const os = require('os')
const cluster = require('cluster')

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)

const cpus = os.cpus()

if(cluster.isMaster) {
  for(let i = 0; i <= cpus.length - 2; i++){
    cluster.fork()
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker with pid ${worker.process.pid} has gone(`)
    cluster.fork()
  })
} else {
  console.log(`Worker with pid=${process.pid} is running`)

  setInterval(() => {
    console.log(`Worker with pid=${process.pid} is still working...`)
  }, 3000)
}
