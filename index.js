const express = require('express')
const engine = require('express-handlebars').engine
const bodyParser = require('body-parser')
const fs = require('fs');

const app = express()
const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  const ok = req.query.ok || false;
  res.render('home', { ok });
})

app.post('/store', (req, res) => {
  const { url } = req.body;
  const data = `${url}\n`;
  fs.appendFile('podcasts.txt', data, function (err) {
    if (err) {
      res.render('home', { ok: false, error: err });
      return;
    };

    res.render('home', { ok: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
