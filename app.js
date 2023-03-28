const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.write("Yokoso you finaly get here :-)");
});

server.listen(port, (err) => {
  if (err) {
    console.log("505", console.error(err));
  } else {
    console.log("Server listening to port" + port);
  }
});
