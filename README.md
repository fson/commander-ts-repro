# commander-ts-repro

Repro for commander.js issue [#1037](https://github.com/tj/commander.js/issues/1037)

## How to run it?
```
npm install
npm run build
```
`npm run build` runs `tsc`, which results in the following error:
```
index.ts:3:1 - error TS4082: Default export of the module has or is using private name 'local.Command'.

  3 export default (program: Command): Command => {
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  4   return program.command("test").action(() => {
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
... 
  6   });
    ~~~~~
  7 };
    ~~
```
