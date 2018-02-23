var http = require('http');

http.createServer(function (req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify([
    {
      name: 'London',
      value: 10000000
    },
    {
      name: 'Sao Paulo',
      value: 20000000
    },
    {
      name: 'Los Angeles',
      value: 5900000
    },
    {
      name: 'Melbourne',
      value: 3300000
    },
    {
      name: 'Delhi',
      value: 19000000
    }
  ]));

}).listen(3000);

console.log('Server running on port 3000.');