const http = require('http');
const fs = require('fs');
const port = 3500;

const server = http.createServer((req, res) => {

    console.log(req.url);
    console.log(req.method);

    switch (true) {

        case req.url === "/" && req.method === "GET":
            fs.readFile("index.html", "utf-8", (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });

            break;
        case req.url === "/head.html" && req.method === "GET":
            fs.readFile("head.html", "utf-8", (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });

            break;
        case req.url === "/tail.html" && req.method === "GET":
            fs.readFile("tail.html", "utf-8", (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });

            break;

        case req.url === "/style.css" && req.method === "GET":
            fs.readFile("style.css", "utf8", (err, data) => {
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(data);
            });

            break;

        case req.url === "/fej.jpeg" && req.method === "GET":
            fs.readFile("fej.jpeg", (err, data) => {
                res.setHeader('Content-Type', 'image/jpeg');
                res.writeHead(200);
                res.end(data);
            });

            break;

        case req.url === "/iras.jpeg" && req.method === "GET":
            fs.readFile("iras.jpeg", (err, data) => {
                res.setHeader('Content-Type', 'image/jpeg');
                res.writeHead(200);
                res.end(data);
            });

            break;

    }
});

// Figyeli, hogy a server melyik porton fut
server.listen(port, () => {
    console.log(`Server fut a ${port} porton`);
})