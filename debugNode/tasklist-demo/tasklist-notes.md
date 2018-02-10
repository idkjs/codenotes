# Tasklist Server Demo

- add task to test add user id from previous step to createTask mutation:
- create several tasks in different states.
```graphql
mutation {
  createTask(input: {
    title: "Build Taskbox Snoozed",
    ownerId: "599d632ac0b9ce1df917d21a",
    state: TASK_SNOOZED
    subtitle: "following the snoozed article"
  }) {
    id
  }
}
```
- output 
```json
{
  "data": {
    "createTask": {
      "id": "599d701ec6c66f23fb0970d6"
    }
  }
}
```
- pinned state:

```graphql
mutation {
  createTask(input: {
    title: "Build Taskbox Pinned",
    ownerId: "599d632ac0b9ce1df917d21a",
    state: TASK_PINNED
    subtitle: "following the pinned article"
  }) {
    id
  }
}
```
- output

```json
{
  "data": {
    "createTask": {
      "id": "599d70aac6c66f23fb0970d7"
    }
  }
}
```
```graphql
mutation {
  createTask(input: {
    title: "Build Taskbox",
    ownerId: "599d632ac0b9ce1df917d21a",
    state: TASK_INBOX,
    subtitle: "following the article"
  }) {
    id
  }
}
```
- response: 599d6e9fc6c66f23fb0970d5

- test it exits
```json
{
  task(id: "599d6e9fc6c66f23fb0970d5") {
    title
    subtitle
    state
    owner {
      email
    }
  }
}
```

- working output:
```graphql
{
  "data": {
    "task": {
      "title": "Build Taskbox",
      "subtitle": "following the article",
      "state": "TASK_INBOX",
      "owner": {
        "email": "test@test.com"
      }
    }
  }
}
```