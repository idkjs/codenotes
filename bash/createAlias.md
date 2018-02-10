## Add aliases to ~/.bash_profile to persist
https://apple.stackexchange.com/questions/99688/how-to-persistently-define-aliases-in-terminal

`open ~/.bash_profile`

##create alias
`alias myalias="ls"`

## Alias for code-insiders
`alias vs="code-insiders ."`

## Alias mongod --fork
```sh
alias mfork="mongod --dbpath /data/db --fork --logpath /data/db/mongodb.log \
--directoryperdb --wiredTigerDirectoryForIndexes"
```

## Alias mongo admin shutdown
`alias mdown="mongo admin --eval 'db.shutdownServer()'"`

## Alias create-graphql-server
`alias cgs="create-graphql-server"`