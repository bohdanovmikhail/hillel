const express = require('express');
const { randomString, randomInt } = require('./random');
const pages = require('./pages');

const app = express();

app.use(express.static('./static'));

app.get('/get-page', function (req, res) {
    let page = req.query.path;

    if (!page || !pages[page]) {
        page = '/';
    }

    res.send(pages[page]);
});

app.get('/random-string', function (req, res) {
    const str = randomString(32);
    res.send(str);
});

app.get('/random-int', function (req, res) {
    const num = randomInt(0, 1000000);
    res.send(num.toString());
});
 
app.listen(3000);