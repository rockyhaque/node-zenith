// dependencies
const http = require("http");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
  const server = http.createServer(handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to post on ${app.config.port}`);
  })
};

// handle Request Response
app.handleReqRes = (req, res) => {
  res.end("Hello all");
};


// start the server
app.createServer()