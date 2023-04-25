const express = require('express');
const server = express();

const db = require("./db.js");

/* const ideas = [
  {
    img: "",
    title: "",
    category: "",
    description: "",
    url: ""
  }
] */

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server.get('/', function (req, res) {

  /* Consultar */
  db.all(`SELECT * FROM ideas`, function (err, rows) {
    if (err) {
      console.log(err)
      return res.send("Erro o banco de dados!!")
    }

    const reverseIdeas = [...rows].reverse()

    let lastIdeas = []
    for (let idea of reverseIdeas) {
      if (lastIdeas.length < 2) {
        lastIdeas.push(idea)
      }
    }

    return res.render('index.html', { ideas: lastIdeas });
  })
})

server.get('/ideas', function (req, res) {

  db.all(`SELECT * FROM ideas`, function (err, rows) {

    /* if para avisar no caso de erro */
    if (err) {
      console.log(err)
      return res.send("Erro o banco de dados!!")
    }

    const reverseIdeas = [...rows].reverse()

    return res.render('ideas.html', { ideas: reverseIdeas });
  })
})

server.post('/', function (req, res) {
  const query = `
  INSERT INTO ideas(
    image, 
    title,
    category,
    description,
    link
  ) VALUES (?,?,?,?,?);
  `
  const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link
  ]

  db.run(query, values, function (err) {
      if (err) {
        console.log(err)
        return res.send("Erro o banco de dados!!")
      }

      return res.redirect("/ideas")
  })
})

server.listen(3000)
