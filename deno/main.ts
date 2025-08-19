import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello!</title><head>
      <body>
        <h1>Deno server!</h1>
      </body>
    </html>
  `;
});

router.get("/route", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Deno route</title><head>
      <body>
          <h1>This is the correct route replaced by Deno route.</h1>
      </body>
    </html>
  `;
});

const app = new Application();
const port = 8080;
const hostname = "0.0.0.0";

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on http://${hostname}:${port}`);

app.listen({ port, hostname });
