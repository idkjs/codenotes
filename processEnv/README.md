#learn-environment-variables
see: https://github.com/dwyl/learn-environment-variables

## env2

Install env2. Run: `npm install env2 --save`.
see: https://github.com/dwyl/env2

1. create a .env file.

```env
DB_HOST=127.0.0.1
DB_PORT=9200
DB_USER=TheSpecial
DB_PASS=EverythingIsAwesome
```

2. run `node env2test.js`
3. outputs `127.0.0.1`
4. gitignore .env file. run `echo .env >> .gitignore`
