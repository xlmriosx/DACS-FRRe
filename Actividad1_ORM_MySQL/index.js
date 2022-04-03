const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Dato');
});

app.listen(3000, () => {
    console.log('Server run..., http://localhost:3000')
});

// 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