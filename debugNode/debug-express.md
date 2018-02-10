# Debugging Express Server with Node Inspect/ChromeDevTools
## this uses the 'debugger' keyword.
- create simple express app
- `npm init -y`
- `npm i express -S`
- `touch app.js` and use this code.
```js
const express = require('express');
const app = express()

app.get('/', (req, res) => {
    debugger
    res.send('Hey, It worked!')
})

app.listen(3000, () => console.log("Server is up!"))
```

- run with `node --inspect-brk app.js` and open `chrome://inspect` if it doesnt do it automatically.

- we can look at what the { req } object looks like by typing `req` in the dev tools console. This will output the properties of this object or any other you inspect. Example output:

```bsh
IncomingMessage {_readableState: ReadableState, readable: true, domain: null, _events: {…}, _eventsCount: 0, …}
baseUrl:""
client ...
```
