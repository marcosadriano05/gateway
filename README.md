# Gateway

This project simulates an API Gateway using Nginx as a reverse proxy.
An API Gateway is useful when you need to migrate an application to another
stack - for exemple.

## Simulation
This project simulates a server running on Node.js, which will eventually be migrated
to use Deno as the backend. To make this change be incrementeal, route by route, an
Nginx server receives all requests and proxies them to the Nodejs service.

Once the Deno backend is set up, specific routes can be proxied to it. This makes
it possible to keep all Node.js routes working while gradually migrating them to Deno.

For exemple:
- Before: the request `GET http://localhost:9090/route` is handled by the Node API.
- After: onde the Deno route is ready, the same request is handled by the Deno API.
Other routes continue to be proxied to Node as usual.

## Running application
To run this project locally, the only requirement is Docker.
```sh
docker compose up
```
