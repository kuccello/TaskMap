var sys = require('sys');
sys.puts("Loading taskmap...");

var Taskmap = function () {
  
  this.respondsWith = ['html', 'json', 'txt'];
  
  this.index = function (params) {
      //this.respond('This is fucked.');
      this.respond({params: params});
  }
}

exports.Taskmap = Taskmap;
sys.puts("...done.");