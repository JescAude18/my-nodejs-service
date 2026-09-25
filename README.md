# my-nodejs-service

A simple Node.js HTTP server for deployment exercises`.

## Requirements

- `Node.js` and `npm` installed on your machine

## Run the server

Install the project dependencies, if any, and start the server:

```bash
npm start
```

The server is then available at:

```text
http://localhost:3000
```

## Routes

- `GET /` returns `Hello, world!` with a `200` status code.
- Any other URL returns `Not found!` with a `404` status code.

## Test with curl

```bash
curl -i http://localhost:3000/
```

Expected response:

```text
HTTP/1.1 200 OK
Content-Type: text/plain
Date: Fri, 25 Sep 2026 11:36:27 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

Hello, world!%
```