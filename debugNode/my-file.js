const express = require('express');
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    debugger
    res.send('Hey, Its working!')
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}!`))