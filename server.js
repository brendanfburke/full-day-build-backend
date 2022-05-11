const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 4000;

const projects = require("./projects.json");
const about = require("./about.json");

app.use(cors());

app.get('/', (req, res) => res.send('Portfolio App'));

app.get("/projects", (req, res) => {
    res.json(projects);
  });

  app.get("/about", (req, res) => {
    res.json(about);
  });



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));