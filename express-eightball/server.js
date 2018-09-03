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

var questions = [];

// Redirect to the 8ball
app.get('/', (req, res) => {
   res.redirect('/magicball');
});

// Show the 8ball
app.get('/magicball', (req, res) => {
   res.render('magicball.ejs', {question: '', answer: '' });
});

//Ask the question
app.post('/ask', (req, res) => {
  var random = Math.floor(Math.random() * 2);

  questions.filter(function(question){
    if(question.question == req.body.question){
      res.render('magicball.ejs',{question: req.body.question, answer: "Question already asked: " + question.answer})
    }
  })

  if (random == 0) {
    var newQuestion = {question: req.body.question, answer: 'No'};
    questions.push(newQuestion);
    res.render('magicball.ejs',{question: req.body.question, answer: 'No'});
  } else if(random == 1) {
    var newQuestion = {question: req.body.question, answer: 'Yes'};
    questions.push(newQuestion);
    res.render('magicball.ejs',{question: req.body.question, answer: 'Yes'});
  }
});
