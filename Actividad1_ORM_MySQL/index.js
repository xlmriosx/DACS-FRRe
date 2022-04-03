const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Dato');
});

app.listen(3000, () => {
    console.log('Server run..., http://localhost:3000')
});