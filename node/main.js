import { createServer } from "node:http";

const hostname = "0.0.0.0";
const port = 8080;

const server = createServer((req, res) => {
  console.log("URL", req.url)
  if (req.url === "/") {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
      <html>
        <head><title>Hello!</title><head>
        <body>
          <h1>Nodejs server!</h1>
        </body>
      </html>
    `);
  }

  if (req.url === "/route/") {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
      <html>
        <head><title>Nodejs route</title><head>
        <body>
          <h1>This route needs to be replaced for the Deno route.</h1>
        </body>
      </html>
    `);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
