const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Redirect to the 8ball
app.get('/', (req, res) => {
   res.redirect('/magicball');
});

// Show the 8ball
app.get('/magicball', (req, res) => {
   res.render('magicball.ejs', { post: '' });
});
