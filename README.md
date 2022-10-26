# Minimal Reproduction of Netlify Issue #4873

The observed issue is that when submitting a POST request,
the request is directed to the back-end job instead of 
the intended post handler.

## Setup

Run the following commands:

```bash
npm install
NODE_DEBUG=http npm run dev:netlify
```

## Reproducing the issue
Open a browser to `http://localhost:4003`, click on link `Upload pet` and submit the form on the next page.

You will see the following errors on the server console:

```shell
 ›   Warning: Missing form submission function handler
Request from ::1: POST /home/pets/upload
Response with status 404 in 1 ms.
 ›   Warning: Missing form submission function handler
Request from ::1: POST /home/pets/upload.html
Response with status 404 in 0 ms.
 ›   Warning: Missing form submission function handler
Request from ::1: POST /home/pets/upload.htm
Response with status 404 in 0 ms.
 ›   Warning: Missing form submission function handler
Request from ::1: POST /home/pets/upload/index.html
Response with status 404 in 0 ms.
 ›   Warning: Missing form submission function handler
Request from ::1: POST /home/pets/upload/index.htm
Response with status 404 in 0 ms.
```

The node http debug shows the connection attempt to port 4004:
```shell
...
HTTP 96144: createConnection 127.0.0.1:4004: [Object: null prototype] {
  port: '4004',
  host: '127.0.0.1',
  hostname: '127.0.0.1',
  socketPath: undefined,
  pfx: undefined,
  key: undefined,
  passphrase: undefined,
  cert: undefined,
  ca: undefined,
  ciphers: undefined,
  secureProtocol: undefined,
  method: 'POST',
  headers: {
    'x-forwarded-for': '::1',
  ...
```

The browser will show the message `Function not found...` instead of the intended result of redirecting you to the root URL.

