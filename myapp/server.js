const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    let p = path.join(__dirname,'.index.html');
    res.send('Hello World!')
});
//app.get('/frank', (req, res) => {
//    res.send('Hi')
//});


app.listen(9999, () => console.log('Example app listening on port 9999!'));