const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

const PORT = 8090;
const HOST = '0.0.0.0';

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Articles',
        createdAt: Date.now(),
        description: 'Test description'
    }];
    res.render('index', {articles: articles});
})

app.listen(8080)

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');
