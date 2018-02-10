# Notes on Debugging Node
## Great video here: [http://www.mead.io/node-debugging/]
## Using Chrome.

- This doesnt open in chrome dev tools
- Run your project with `node --inspect app.js`
- output is:

```bsh
Ensos-MacBook-Pro:debugNode shingdev$ node --inspect app.js
Debugger listening on ws://127.0.0.1:9229/7b87015e-9062-4abc-92bd-ace1916d225e
For help see https://nodejs.org/en/docs/inspector
Hello Alain
```

## Opens in ChromeDevTools
- Run your project with `node --inspect-brk app.js`. Output:
```bsh
Ensos-MacBook-Pro:debugNode shingdev$ node --debug-brk --inspect app.js
Debugger listening on ws://127.0.0.1:9229/1224dc03-7189-44fb-abed-62727e3146e7
For help see https://nodejs.org/en/docs/inspector
Debugger attached.
```

- Open `chrome://inspect` directly and you should see the ws url show up.
- window on right side shows each step of code as it executes and it values. If you go to scope you will see value of local variable
- in the console you can log variable or change their values. Example:
```bsh
name
"Alain"
name = name + ' Armand'
"Alain Armand"
name
"Alain Armand"
```
- new vars will persist in debug mode. If you hit play button the code will run and output `Hello Alain Armand`