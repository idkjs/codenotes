# Azure CosmosDB Setup

- see: `https://docs.microsoft.com/en-us/azure/cosmos-db/create-mongodb-nodejs`
1. Login to Azure: `az login`
2. To use Azure Cosmos DB commands, add the Azure Cosmos DB module:`az component update --add cosmosdb`
3. Create a resource group with the az group create. An Azure resource group is a logical container into which Azure resources like web apps, databases and storage accounts are deployed and managed.
- `az group create --name cosmos-rg --location "West Europe"`

- - `/Users/devworx/lib/azure-cli`. Not working
- trying `export PATH=/Users/devworx/lib/azure-cli:$PATH`
- In what directory would you like to place the 'az' executable? (leave blank to use '/Users/devworx/bin'):
- The executable will be in `'/Users/devworx/bin'`
- hit yes to add path to ./shellpaths
- source '/Users/devworx/lib/azure-cli/az.completion' is presents in both shellpath and .zshrc.
- exec -l $SHELL to restart shell
- az ran after that. lets see if keep working.
- This is in ./shellpaths 'source '/Users/devworx/lib/azure-cli/az.completion'


- re-ran az group create after re-installing azure-cli
```bs
az group create --name cosmos-rg --location "West Europe"
{
  "id": "/subscriptions/6540d9d8-dbbc-4a34-ba91-0c72e6931b0f/resourceGroups/cosmos-rg",
  "location": "westeurope",
  "managedBy": null,
  "name": "cosmos-rg",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null
}
```

- create cosmosdb account with these params: `{ name: shingco, resource-group: cosmos-rg, kind: MongoDB}`
- `az cosmosdb create --name shingco --resource-group cosmos-rg --kind MongoDB`

- When the Azure Cosmos DB account is created, the Azure CLI shows information similar to the following example.
- success output:
```json
{
  "consistencyPolicy": {
    "defaultConsistencyLevel": "Session",
    "maxIntervalInSeconds": 5,
    "maxStalenessPrefix": 100
  },
  "databaseAccountOfferType": "Standard",
  "documentEndpoint": "https://shingco.documents.azure.com:443/",
  "enableAutomaticFailover": false,
  "failoverPolicies": [
    {
      "failoverPriority": 0,
      "id": "shingco-westeurope",
      "locationName": "West Europe"
    }
  ],
  "id": "/subscriptions/6540d9d8-dbbc-4a34-ba91-0c72e6931b0f/resourceGroups/cosmos-rg/providers/Microsoft.DocumentDB/databaseAccounts/shingco",
  "ipRangeFilter": "",
  "kind": "MongoDB",
  "location": "West Europe",
  "name": "shingco",
  "provisioningState": "Succeeded",
  "readLocations": [
    {
      "documentEndpoint": "https://shingco-westeurope.documents.azure.com:443/",
      "failoverPriority": 0,
      "id": "shingco-westeurope",
      "locationName": "West Europe",
      "provisioningState": "Succeeded"
    }
  ],
  "resourceGroup": "cosmos-rg",
  "tags": {},
  "type": "Microsoft.DocumentDB/databaseAccounts",
  "writeLocations": [
    {
      "documentEndpoint": "https://shingco-westeurope.documents.azure.com:443/",
      "failoverPriority": 0,
      "id": "shingco-westeurope",
      "locationName": "West Europe",
      "provisioningState": "Succeeded"
    }
  ]
}
```

- Retrieve the key
In order to connect to an Azure Cosmos DB database, you need the database key. Use the `az cosmosdb list-keys` command to retrieve the primary key.

- run: `az cosmosdb list-keys --name shingco --resource-group cosmos-rg`
- success output:
```json
{
  "primaryMasterKey": "9OuEw4uHLAwFRLDG1LH1YA0eAsJhin36HtSK3SEKGJC7IquJYI6qJz5LwxNzHduksbz4F6YAglHSKxiFUE2H4A==",
  "primaryReadonlyMasterKey": "ZxK8SYXEIwqtNEaVCKbKIqBDgO18s7fFuwVbQwk2rZOZwZa3Nl2xsWTEzp8mblxqZVrex3LxPTkx84wTsNsJ9w==",
  "secondaryMasterKey": "QYteM3PcdqTEQPtQVLdd9kM3jbJcjypJQ0ejOocPSn0hdcAc92juOenSAm2u9ozphHt0JKAKHZTG9m93a3n7iA==",
  "secondaryReadonlyMasterKey": "JtPjDVilAljjkhqBdQUB5PfadNjfP90EJMXJM1Ll82LnhwcwX9MnWaEbkbTYpqR4sO5K3IrsK8sjMK4YGFcc9w=="
}
```

- Configure the connection string in your Node.js application
In your MEAN.js repository, open `config/env/local-development.js`.
Replace the content of this file with the following code. Be sure to also replace the two <cosmosdb_name> placeholders with your Azure Cosmos DB account name, and the <primary_master_key> placeholder with the key you copied in the previous step.

```js
'use strict';

module.exports = {
  db: {
    uri: 'mongodb://shingco:9OuEw4uHLAwFRLDG1LH1YA0eAsJhin36HtSK3SEKGJC7IquJYI6qJz5LwxNzHduksbz4F6YAglHSKxiFUE2H4A==@shingco.documents.azure.com:10250/mean-dev?ssl=true&sslverifycertificate=false'
  }
};

```

## Start Mongodb
- run alias to find mongodb alias command. i dont remember.
- have to use `mork` alias command. Aliased to:
`mongod --dbpath /data/db --fork --logpath /data/db/mongodb.log --directoryperdb --wiredTigerDirectoryForIndexes`

## Deploy the Node.js application to Azure

When you deploy your application to App Service, it will run in the production environment by default. So now, you need to make the same change to the respective configuration file.

- open config/env/production.js.+
In the db object, replace the value of uri like for dev mode.

`'mongodb://<cosmosdb_name>:<primary_master_key>@<cosmosdb_name>.documents.azure.com:10250/mean?ssl=true&sslverifycertificate=false',`

- create cosmosdb service, then add collection.
- to connect to it via a node app, pass the connection string. That it.
- this is work in mongoose-crud-azure app where string is passed to DB_URI variable in .env file `DB_URI="mongodb://graphql:qqW0m2PM5DfdeTfIyxmZJFgzbIw8VvyKhTR0l8PJSCiqyWYtSXmdVWy61QZFrD7TRSrzAnfLG2J0tHnSWknhmw==@graphql.documents.azure.com:10255/?ssl=true"
`
