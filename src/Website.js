const express = require('express');
const path = require('path');
const app = express();
app.disable('x-powered-by');

app
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'views'))
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => {
        res.render('index.ejs');
    })
    .listen(3001, () => console.log('[Website Status]: voided.pw is online'));