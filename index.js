var httpProxy = require('http-proxy');
var routes = require('./routes');

var options = {
  router: routes
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);
