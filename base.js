// primeiro programa em node js
// criando meu primeiro servidor
// DS302 May 2022
var dt = require('./export1');

var http = require('http');
var url = require('url');
console.log('oi tudo certo');

http.createServer(function (req, res){
    // obter dados da url enviada
    var sendUrl = url.parse(req.url, true).query;
    console.log(req.url);

    res.writeHead(200,
        //{'Content-Type': 'text/plain'}
        {'Content-Type': 'text/html; charset=utf-8'});
    // vai responder a chamada http
    res.end('<body><h1>Teste 200 OK</h1><div><h2>Teste concluído</h2></div><a>Next class </a></body>' + dt.obterData() + '<br> <h2>Data local</h2>' +
    'Url enviada = ' + sendUrl.ano);
}).listen(80);