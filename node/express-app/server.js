// express app
const express = require("express");
const app = express();
const port = 4000;

//use cors
const cors = require("cors");
app.use(cors());

//use body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect to sqlite3 db file name app.db
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./app.db");

//create table if not exists named Games that has columns Id, Name, Category, Year, Publisher
db.run(
  "CREATE TABLE IF NOT EXISTS Games (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Category TEXT, Year INTEGER, Publisher TEXT)"
);

// get all games from db
app.get("/games", (req, res) => {
  db.all("SELECT * FROM Games", (err, rows) => {
    if (err) {
      res.send(err);
    }
    res.json(rows);
  });
});

// add new game to db
app.post("/games", (req, res) => {
  db.run(
    "INSERT INTO Games (Name, Category, Year, Publisher) VALUES (?,?,?,?)",
    [req.body.name, req.body.category, req.body.year, req.body.publisher],
    (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "New game added!" });
    }
  );
});

// delete game from db
app.delete("/games/:id", (req, res) => {
  db.run("DELETE FROM Games WHERE Id =?", [req.params.id], (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Game deleted!" });
  });
});

// update game in db
app.put("/games/:id", (req, res) => {
  db.run(
    "UPDATE Games SET Name =?, Category =?, Year =?, Publisher =? WHERE Id =?",
    [
      req.body.name,
      req.body.category,
      req.body.year,
      req.body.publisher,
      req.params.id,
    ],
    (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Game updated!" });
    }
  );
});

// get one game from db by id
app.get("/games/:id", (req, res) => {
  db.get("SELECT * FROM Games WHERE Id =?", [req.params.id], (err, row) => {
    if (err) {
      res.send(err);
    }
    res.json(row);
  });
});

// listen on port 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
