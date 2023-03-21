const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages});
});

/* new router. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req,res,next){
  const messageText = req.body.message_text;
  const messageUser = req.body.name;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;
