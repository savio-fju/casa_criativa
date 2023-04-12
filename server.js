const express = require('express');
const server = express();

const ideas = [
  {
    img: "",
    title: "",
    category: "",
    description: "",
    url: ""

  }
]

server.use(express.static("public"))

const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server.get('/', function (req, res) {

  const reverseIdeas = [...ideas].reverse()

  let lastIdeas = []
  for (let idea of reverseIdeas) {
    if (lastIdeas.length < 2) {
      lastIdeas.push(idea)
    }
  }

  return res.render('index.html', { ideas: lastIdeas });
})

server.get('/ideas', function (req, res) {

  const reverseIdeas = [...ideas].reverse()

  return res.render('ideas.html', { ideas: reverseIdeas});
})

server.listen(3000)
