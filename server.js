require('babel-register');

const express = require('express');
const result = require('./render').default;
const app = express();

app.get('/', (req, res) => {
    res.send(result);
});

app.listen(
    3005,
    () => console.log('Server is listening on 3005')
)