/**
 * see: https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript
 */

const gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "axe",
  $loki: "loki",
  test: function() {
    return `${this.name}`;
  },
  greet: function() {
    return `Hi, my name is ${this.name}!`;
  }
};
gimli.$lokki = gimli.$loki;
// gimli.greet();
console.log("GIMLI: ", gimli);
console.log("GIMLI WEAPON", gimli.weapon);
console.log(gimli.greet());
