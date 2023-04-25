const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./db')

db.serialize(function() {

  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
      );
  `)
/* 
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
}) */

  /* const query = `
  INSERT INTO ideas(
    image, 
    title,
    category,
    description,
    link
  ) VALUES (?,?,?,?,?);
  `
  const values = [
    "https://image.flation.com/icons/svg/2729/2729007.svg",
    "Curso de Programação",
    "Estudo",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    "https://github.com/savio-fju"
  ]
 */
  /* db.run(query, values, function (err) {
    if (err) return console.log(err)

    console.log(" Deu Error", this)
  }) */

  /* Deletar */

  /* db.run(`DELETE FROM ideas WHERE id=?`, [1], function(err){
    if (err) return console.log(err)

    console.log("DELETEI", this)
  }) */

  /* Consultar */
  /* db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err)

    console.log(rows)
  }) */
})

module.exports = db