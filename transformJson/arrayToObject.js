const fs = require("fs");
let data = require("./companies.json");

/** script for taking array of objects and transforming so there is a key on it */
const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({ [item[keyField]]: item })));

const companies = arrayToObject(data, "names", function(err) {
  if (err) {
    return console.log(err);
  } else console.log("success");
});
// const companies = arrayToObject(data, "name");
const output = { companies };

const content = JSON.stringify(output, null, 2);

fs.writeFile("./transformJson/arrayToObject.json", content, "utf8", function(
  err
) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
