class PingPong {
    constructor() {
        console.log('PingPong class');
        this.i=0
      }

    ping()
    {
        this.i++;
        console.log(this.i)
    }

    /*
// // as callback
function ajax(cb) {
    setTimeout(function() {
      console.log(cb(1));
    },1000);
  }
  
  // //invoke old way
  ajax(function(arg) {
    return arg + 1;
  });
  
  // // arrow version
  ajax(v => v + 1)
   */
}


module.exports = PingPong