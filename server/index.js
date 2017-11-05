const express = require('express')
var cors = require('cors');
const app = express()

app.use(cors())
app.get('/', (req, res) => res.send([
    {name: 'Dhruv', age: 25},
    {name: 'Juhi', age: 25},
    {name: 'Himanshu', age: 25},
    {name: 'Prathmesh', age: 25}
]));

app.listen(3000, () => console.log('Example app listening on port 3000!'));