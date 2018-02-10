// var reshaper = require("reshaper");
const fs = require("fs");
// let companies = require("./companies.json");
let data = require("./companies.json");
console.log(Array.isArray(data));
const companies = data.map(function(el) {
  var o = Object.assign({}, el);
  o.id = o.$loki;
  return o;
});
var resultt = data.map(function(el) {
  var o = Object.assign({}, el);
  o.id = o.$loki;
  return o;
});
console.log(data);
console.log(resultt);
// console.log(companies);
// const companies = Object.keys(data).map(k => {
//   let key = k;
//   // console.log(id);
//   let name = data[k].name;
//   let sector = () => data[k].Object.values(sector);
//   let logo = data[k].logo;
//   return {
//     key: {
//       name,
//       sector,
//       logo
//     }
//   };
// });

// const output = companies.map(c => {
//   return {
//     ...c,
//     id: c.$loki
//   };
// });
// console.log("COMPANIES: ", companies);

// var schema = ["String"];
// const dataShaper = reshaper(companies, schema);
// fs.writeFileSync("./shaper.json", JSON.stringify(dataShaper, null, 4));

// console.log(dataShaper);

// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);

//   const sector = [];
//   arrayOfStrings.map(s => {
//     sector.push(s);
//   });
//   // console.log("SECTOR_ARRAY");
//   // console.log(sector);
//   // console.log("--------");
//   return sector;
// }

// var space = " ";

// var dataSeries = companies.map(c => {
//   return {
//     name: c.name,
//     data: { ...c, sector: splitString(c.sector, space) }
//   };
// });
// // const output = companies.map(c => {
// //   return {
// //     c.name:
// //     {...c,
// //     sector: splitString(c.sector, space)
// //   }
// //   };
// //   // console.log(splitString(c.sector, comma));
// // });
// const data = dataSeries;
// // const data = [output];
// // console.log(data);
fs.writeFileSync("./transformed.json", JSON.stringify(resultt, null, 4));
