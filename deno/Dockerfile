FROM denoland/deno:alpine

WORKDIR /app

COPY . .

RUN deno cache main.ts

CMD ["deno", "run", "--allow-net", "main.ts"]
