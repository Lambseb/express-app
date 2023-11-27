const express = require("express");
const app = express();
const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome my favourite movie list");
});

app.get("/app/movies", (req, res) => {
  res.json(movies).sendStatus(200);
});

const filtered = (req, res) => {
  res
    .status(404)
    .send(movies.find((found) => found.id === parseInt(req.params.id)));
};
app.get("/app/movies/:id", filtered);
