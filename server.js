const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

const PORT = 8080;
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

<<<<<<< HEAD
<<<<<<< Updated upstream
app.listen(5000);
=======
app.listen(8080)
>>>>>>> Stashed changes
=======
app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');
>>>>>>> b9f03756600a12f5af8318b3314758709af9e5e5
