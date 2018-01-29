var Ping = require('./PingPong')


var ping = new Ping()

setInterval(()=>{
    ping.ping()
},1000)
