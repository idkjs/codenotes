require("env2")(".env"); // loads all entries into process.env

console.log(process.env.DB_HOST); // "127.0.0.1"
