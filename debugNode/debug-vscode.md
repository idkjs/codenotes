# Debugging Node with VS Code

- Click Debugger icon on left icon menu bar. This wont do anything without configuring it.
- Click Debug Configurations drop down and add a configuration. This opens up a json config window.
- example:
```js
{
  // Use IntelliSense to learn about possible Node.js debug attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [

    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceRoot}/app.js"
    }
  ]
}
```

- it will do some auto detecting of your set up. Make sure the start file is correct. 
- from this same window, click the Debug play button the launch configuration you want to use, in this case, "Launch Program".
- this will launch the program in debug mode. The debug console, next to terminal tab, will show the output:
```bsh
Debugging with inspector protocol because Node.js v8.2.1 was detected.
node --inspect=17614 --debug-brk app.js 
Debugger listening on ws://127.0.0.1:17614/8e388fa3-b645-4467-8dfa-51284f54d283
Debugger attached.
Server is up!
```
- if you go to the running app in chrome, run some requests, output should show up in debug console.
- in the console you can log variable or change their values, inspect variables, etc. Type `req` gets you
```bsh
IncomingMessage {_readableState: ReadableState, readable: true, domain: null, _events: Object, _eventsCount: 0, …}
```
if you ran the app and made a request.

- variable pane from left in chrome node inspect is on right. You can see local scope. Call stack is on bottom left. Looking at the variable values in the variables pane is the same as calling them in the debug console command line.

- if app is paused on debugger, clicking play button on middle top is same as play in node/chrome, it will continue the paused program.
- green circle restarts the project. Good if you made some changes in the code.

## Adding breakpoints while running
- click line number you want breakpoint at, click play. VS Code recognizes new breakpoint.

## Stepping over function calls.
- click the icon with blue arrow going to right.

## Step Into/Out
- click icon with arrow pointing down:  This will show us what this function is doing.
- click step in, arrow up, get out back to your code.

## Setting up debugger so it uses the currently opened file.
- see docs: [https://code.visualstudio.com/docs/editor/debugging#_variable-substitution]
- we want to change the app.js to ${file} variable so it debugs the currently opened file.
- also use "cwd" property for ${workspaceRoot} to set this up. see: [https://code.visualstudio.com/docs/editor/debugging#_launch-configurations]

## Node.js Attach to Process Debug Configuration

- click add configuration in VS Code Debugger
- this lets you attach the debugger to an existing node app running in debug mode. Nodemon would be a process we want to attach to. we can set this up so that it re-runs when nodemon makes changes.
- Do this if you have running app that maybe you started from the command line, ex: `node --inspect-brk my-file.js`, not in vscode. VS Code Debugger will detect it. When you click attach to process, it will give you a list of options. Look for the option for the running program.  NOTE: attaching with port var is deprecate and running debugber with nodemon requires using 'inspector' protocal
Example of good Attach to Process:
```json
{
  "type": "node",
  "request": "attach",
  "name": "Attach by Process ID",
  "protocol": "inspector",
  "processId": "${command:PickProcess}"
},
```
- Get Debugger to restart after nodemon restart process:
```json
{
      "type": "node",
      "request": "attach",
      "name": "Attach by Process ID",
      "protocol": "inspector",
      "processId": "${command:PickProcess}",
      "restart": true
    },
```
- Note: Debugging enviroments use Port: 5858

## Running Debugger with Nodemon
- run file from command line using nodemon: `nodemon my-file.js`. This will watch the file for changes.
- run nodemon with debug `nodemon my-file.js`, then clikc DEBUG Attach By Process. And select the nodemon process you just ran from the drop down.

## Debuggign tasklist-demo-server project
- need start the project with babel-node. can do this by setting up npm as program or calling the starting scripts directly which is what i do here. Seems to start. But doesnt get past create the mongodb instance.

```json
{
      "type": "node",
      "request": "launch",
      "name": "Launch via Babel-Node",
      "program": "${workspaceRoot}/index.js",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/babel-node",
      "cwd": "${workspaceRoot}"
    },
```

## Resources
- see: [https://gist.github.com/dchowitz/83bdd807b5fa016775f98065b381ca4e]
- see: [https://stackoverflow.com/questions/41948471/how-to-debug-nodejses6-code-in-vscode-editor]
