const express = require('express');
const articleRouter = require('./routes/articles');
const app = express()

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Articles',
        createdAt: Date.now(),
        description: 'Test description'
    }]
    res.render('index', {articles: articles});
})

<<<<<<< Updated upstream
app.listen(5000);
=======
app.listen(8080)
>>>>>>> Stashed changes
