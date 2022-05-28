const express = require("express");
const app = express();

const port = 3000;

app.use(express.static("client"));

//------------------------------------------------------
const pg = require("pg");

const db = new pg.Pool({
  database: "scavenger_hunt",
});

//------------------------------------------------------

app.get("/api/challenges", (req, res) => {
  // db.connect((err, client) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     client.query("SELECT * FROM challenges", (err, result) => {
  //       console.log(result);
  //       const challenges = result.rows;
  //       res.json(challenges);
  //     });
  //   }
  // });
  const sql = "SELECT * FROM challenges";
  db.query(sql).then((dbResult) => {
    const currentTime = new Date().getTime();
    const response = {
      data: dbResult.rows,
      currentTime: currentTime,
    };
    res.json(response);
  });
});

app.get("/api/challenges/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM challenges WHERE id=${id}`;
  db.query(sql).then((dbResult) => {
    res.json(dbResult.rows);
  });
});

//------------------------------------------------------

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
