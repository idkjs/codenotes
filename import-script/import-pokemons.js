const { request } = require("graphql-request");
const pokemons = require("./pokemons.json");
// mutation with graphql-request, see: https://github.com/graphcool/graphql-request/issues/7
const mut = `mutation {
    createPokemon ( data: {
        id: 1,
        name: "bulbasaur",
        speciesId: 1,
        height: 7,
        weight: 69,
        baseExperience: 64,
        order: 1,
        isDefault: 1
            }){
      id
    }
  }`;

async function main() {
  pokemons.map(p => {
    const mut = `mutation {
            createPokemon ( data: {
                name:${p.name},
                speciesId:${p.speciesId}
                height:${p.height}
                weight: ${p.weight}
                baseExperience: ${p.baseExperience}
                order:${p.order}
                isDefault: ${p.isDefault}
            }){
              id
            }
          }`;
  });
  // add prisma/graphcool endpoint
  request("http://localhost:4000/", mut).then(data => console.log(data));
}

main();
// // add prisma/graphcool endpoint
// request("https://eu1.prisma.sh/alain-armand-1b1a62/pokemons/dev", mut).then(
//   data => console.log(data)
// );
