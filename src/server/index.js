require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "../public")));

// API calls

app.get("/apod", async (req, res) => {
  try {
    let image = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
    ).then((res) => res.json());

    console.log("image", image);
    res.send({ image });
  } catch (err) {
    console.log("error:", err);
  }
});

// TODO construct router for different mars rovers
app.get("/rover", async (req, res) => {
  const { roverName } = req.query;

  try {
    let rover = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${process.env.API_KEY}`
    ).then((res) => res.json());
    res.send({ rover });
  } catch (error) {
    console.log("error", error);
    res.send({ error });
  }
});

app.get("/roverImages", async (req, res) => {
  const { roverName } = req.query;
  const { maxDate } = req.query;

  try {
    let rover = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${maxDate}&api_key=${process.env.API_KEY}`
    ).then((res) => res.json());
    res.send({ rover });
  } catch (error) {
    console.log("error", error);
    res.send({ error });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
