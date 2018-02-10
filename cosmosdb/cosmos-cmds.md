# commands

- create cosmosdb account:
- See: https://docs.microsoft.com/en-us/cli/azure/cosmosdb#create
- `az cosmosdb create --name shingco --resource-group cosmos-rg --kind MongoDB`

- show dbs graphql db
-
```bsh
alain@Azure:~$ az cosmosdb show --name graphql --resource-group gql-express
{
  "consistencyPolicy": {
    "defaultConsistencyLevel": "Session",
    "maxIntervalInSeconds": 5,
    "maxStalenessPrefix": 100
  },
  "databaseAccountOfferType": "Standard",
  "documentEndpoint": "https://graphql.documents.azure.com:443/",
  "enableAutomaticFailover": false,
  "failoverPolicies": [
    {
      "failoverPriority": 0,
      "id": "graphql-westeurope",
      "locationName": "West Europe"
    }
  ],
  "id": "/subscriptions/6540d9d8-dbbc-4a34-ba91-0c72e6931b0f/resourceGroups/gql-express/providers/Micros
oft.DocumentDB/databaseAccounts/graphql",
  "ipRangeFilter": "",
  "kind": "MongoDB",
  "location": "West Europe",
  "name": "graphql",
  "provisioningState": "Succeeded",
  "readLocations": [
    {
      "documentEndpoint": "https://graphql-westeurope.documents.azure.com:443/",
      "failoverPriority": 0,
      "id": "graphql-westeurope",
      "locationName": "West Europe",
      "provisioningState": "Succeeded"
	      }
  ],
  "resourceGroup": "gql-express",
  "tags": {},
  "type": "Microsoft.DocumentDB/databaseAccounts",
  "writeLocations": [
    {
      "documentEndpoint": "https://graphql-westeurope.documents.azure.com:443/",
      "failoverPriority": 0,
      "id": "graphql-westeurope",
      "locationName": "West Europe",
      "provisioningState": "Succeeded"
    }
  ]
}
```

- list read access key
```bsh
 az cosmosdb list --name graphql --resource-group gql-express
[
  {
    "consistencyPolicy": {
      "defaultConsistencyLevel": "Session",
      "maxIntervalInSeconds": 5,
      "maxStalenessPrefix": 100
    },
    "databaseAccountOfferType": "Standard",
    "documentEndpoint": "https://graphql.documents.azure.com:443/",
    "enableAutomaticFailover": false,
    "failoverPolicies": [
      {
        "failoverPriority": 0,
        "id": "graphql-westeurope",
        "locationName": "West Europe"
      }
    ],
    "id": "/subscriptions/6540d9d8-dbbc-4a34-ba91-0c72e6931b0f/resourceGroups/gql-express/providers/Microsoft.DocumentDB/databaseAccounts/graphql",
    "ipRangeFilter": "",
    "kind": "MongoDB",
    "location": "West Europe",
    "name": "graphql",
    "provisioningState": "Succeeded",
    "readLocations": [
      {
        "documentEndpoint": "https://graphql-westeurope.documents.azure.com:443/",
        "failoverPriority": 0,
        "id": "graphql-westeurope",
        "locationName": "West Europe",
        "provisioningState": "Succeeded"
      }
    ],
    "resourceGroup": "gql-express",
    "tags": {},
    "type": "Microsoft.DocumentDB/databaseAccounts",
    "writeLocations": [
      {
        "documentEndpoint": "https://graphql-westeurope.documents.azure.com:443/",
        "failoverPriority": 0,
        "id": "graphql-westeurope",
        "locationName": "West Europe",
        "provisioningState": "Succeeded"
      }
    ]
  }
]
```
- list read only access keys
- See: https://docs.microsoft.com/en-us/cli/azure/cosmosdb#list
- `az cosmosdb list-read-only-keys --name graphql --resource-group gql-express`
-output:
```json
{
  "primaryReadonlyMasterKey": "HzaN1ukuokCrn0IdcMaErQDBJbYwiKLTp1FA5vNdVkxQoTaMQ7lYBYgTHeb2MqkQkCTdag0aFKlgRd8OctWFHQ==",
  "secondaryReadonlyMasterKey": "45SzTz3IuiOJTEEwuNjsEfJ4KJpjfTh5TkMv0ytdY76taX06TReogl88NYyobFISN2kGLJaiZkYqLM56tn58vg=="
}
```
