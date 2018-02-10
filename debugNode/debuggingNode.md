# Notes on Debugging Node

## Great video here: [http://www.mead.io/node-debugging/] - outdated but still great.

## Using Chrome.

- install `npm install -g node-inspector`
- start app with node-debug: `node-debug index.js --debug-brk`, (the --debug-brk pauses the execution on the first line)

# RisingStack.com Options
see: [https://blog.risingstack.com/how-to-debug-nodej-js-with-the-best-tools-available/]
## debug
```js
// index.js
const debugHttpIncoming = require('debug')('http:incoming')  
const debugHttpOutgoing = require('debug')('http:outgoing')

let outgoingRequest = {  
  url: 'https://risingstack.com'
}

// sending some request
debugHttpOutgoing('sending request to %s', outgoingRequest.url)

let incomingRequest = {  
  body: '{"status": "ok"}'
}

// serving some request
debugHttpOutgoing('got JSON body %s', incomingRequest.body) 
```
- then run app with: `DEBUG=http:incoming,http:outgoing node index.js`
- also `DEBUG=http:* node index.js` for wildcard output

## pino logger option
- `const pino = require('pino')()`

```js
const pino = require('pino')()

pino.info('hello pino')  
pino.info('the answer is %d', 42)  
pino.error(new Error('an error')) 
```
-outputs:
```js
{"pid":28325,"hostname":"Gergelys-MacBook-Pro.local","level":30,"time":1492858757722,"msg":"hello pino","v":1}
{"pid":28325,"hostname":"Gergelys-MacBook-Pro.local","level":30,"time":1492858757724,"msg":"the answer is 42","v":1}
{"pid":28325,"hostname":"Gergelys-MacBook-Pro.local","level":50,"time":1492858757725,"msg":"an error","type":"Error","stack":"Error: an error\n    at Object.<anonymous> (/Users/gergelyke/Development/risingstack/node-js-at-scale-debugging/pino.js:5:12)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)\n    at Function.Module._load (module.js:438:3)\n    at Module.runMain (module.js:604:10)\n    at run (bootstrap_node.js:394:7)\n    at startup (bootstrap_node.js:149:9)\n    at bootstrap_node.js:509:3","v":1}
```

## Built in debug
- add `debugger` in the functions your want to debug. This way the execution of your script will be paused at that line, then you can start using the commands exposed by the debugging agent:

cont or c - continue execution,
next or n - step next,
step or s - step in,
out or o - step out,
repl - to evaluate script's context.

- run `node debug index.js`

- this is the curl statement not working on tasklist-demo-server
`curl localhost:3000/login -d '{"email": "tom@hichroma.com", "password": "testpassword"}' -H "content-type: application/json"`

- second curl test:
`curl localhost:3000/login -d '{"email": "testm@hichroma.com", "password": "testpassword"}' -H "content-type: application/json"`

- second test worked. I have no idea why. this is curl and response:
```bsh
curl localhost:3000/login -d '{"email": "testm@hichroma.com", "password": "testpassword"}' -H "content-type: application/json"
-response{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1OTlkNjE0MGMwYjljZTFkZjkxN2QyMTgifQ.SvIX19-LUVyzb7JfnA7wfQUCe7OiMQpZKEFw2zv3GOo"}

```

- 3rd test works too.
- this users user id is 599d632ac0b9ce1df917d21a
```bsh
curl localhost:3000/login -d '{"email": "test@test.com", "password": "testpassword"}' -H "content-type: application/json"

-response{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1OTlkNjMyYWMwYjljZTFkZjkxN2QyMWEifQ.NLnHqErsY6dUFPPzB70-Pb04a7mfiz3gcVlAMLujh-E"}
```

- 4th attempt. Deleted tom@hichroma documents, reinserted. ran curl. workd
```bsh
curl localhost:3000/login -d '{"email": "tom@hichroma.com", "password": "testpassword"}' -H "content-type: application/json"
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1OTlkNjVhMWMwYjljZTFkZjkxN2QyMWIifQ.pPXJUfmdOZtKGgZAcJAt308E3gETsxeQ-A_3R7EoQnE"}
```
- error to debug.:
```sh
TypeError: bcrypt.compare is not a function<br> &nbsp; &nbsp;at _callee2$ (/Users/shingdev/CODE/tasklist-demo-server/server/authenticate.js:39:35)<br> &nbsp; &nbsp;at tryCatch (/Users/shingdev/CODE/tasklist-demo-server/node_modules/regenerator-runtime/runtime.js:63:40)<br> &nbsp; &nbsp;at Generator.invoke [as _invoke] (/Users/shingdev/CODE/tasklist-demo-server/node_modules/regenerator-runtime/runtime.js:337:22)<br> &nbsp; &nbsp;at Generator.prototype.(anonymous function) [as next] (/Users/shingdev/CODE/tasklist-demo-server/node_modules/regenerator-runtime/runtime.js:96:21)<br> &nbsp; &nbsp;at step (/Users/shingdev/CODE/tasklist-demo-server/server/authenticate.js:60:191)<br> &nbsp; &nbsp;at /Users/shingdev/CODE/tasklist-demo-server/server/authenticate.js:60:361<br> &nbsp; &nbsp;at &lt;anonymous&gt;<br> &nbsp; &nbsp;at process._tickDomainCallback (internal/process/next_tick.js:228:7)
Ensos-MacBook-Pro:~ shingdev$ curl localhost:3000/login -d '{"email": "tom@hichroma.com", "password": "testpassword"}' -H "content-type: application/json"
Error: data and hash arguments required<br> &nbsp; &nbsp;at /Users/shingdev/CODE/tasklist-demo-server/node_modules/bcrypt/bcrypt.js:179:16<br> &nbsp; &nbsp;at _combinedTickCallback (internal/process/next_tick.js:131:7)<br> &nbsp; &nbsp;at process._tickDomainCallback (internal/process/next_tick.js:218:9)

``` 
# Debug with VS Code
see:[https://blog.risingstack.com/how-to-debug-nodej-js-with-the-best-tools-available/]

## Enter tasklist-demo-server mongodb instance
- `mongo --port 3002`