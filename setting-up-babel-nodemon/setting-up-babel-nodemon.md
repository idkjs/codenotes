## Setting up Babel and nodemon

### Inital set-up

Set up project:

```bash
mkdir project
cd project
npm init -y
```

Install dev dependencies:

```bash
npm i --save-dev babel-cli babel-preset-latest nodemon
```

Configure Babel by adding the lines below to `package.json`:

```json
"babel": {
  "presets": [
    "latest"
  ]
},
```

### Scripts

Add some convenience scripts to `package.json`:

```json
"scripts": {
  "babel-node": "babel-node --presets=latest",
  "start": "nodemon --exec npm run babel-node -- ./index.js",
  "build": "babel src -d dist"
},
```

To start the Node.js REPL:

```bash
npm run babel-node
```

To start the app in development mode (letting Babel interpret ES6 code):

```bash
npm start
```

To build the ES5 code in the `build` directory from the ES6 code in the `src` directory:

```bash
npm build
```
### Adding in `Mocha` and `chai`

```bash
npm install --save-dev mocha chai
```

Add this line to the `scripts` section in `package.json`:

```json
"scripts": {
  ...
  "mocha": "mocha --compilers js:babel-register",
  "test": "mocha --compilers js:babel-register --recursive ./test/"
}
```

Create a new directory called `test`:

```bash
mkdir test
```

Minimal test (to save e.g. as `test/test.js`):

```javascript
'use strict'

import { expect } from 'chai'

describe('test', function () {
  it('should pass', function () {
    expect('string').to.be.a('string')
  })
})
```