const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  //telling the server that it has to parse a html file with a status code of 200
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, (err) => {
  if (err) {
    console.log("505", console.error(err));
  } else {
    console.log(`Server listening to port at ${port}`);
  }
});
