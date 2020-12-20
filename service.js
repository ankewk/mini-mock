const http = require('http');
const conf = require('./conf');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    // const urlArr = req.url.split('/');
    res.setHeader('Content-Type', 'application/json');
    try {
        let fileata = fs.readFileSync('./api'+req.url+'.json');
        // let data = JSON.parse(fileata);
        res.statusCode = 200;
        res.end(fileata);
    } catch(err) {
        res.statusCode = 404
        console.log(err);
        res.end(conf.defaultJson)
    }
});

server.listen(conf.port, ()=>{
    console.log('serveice is start!');
});