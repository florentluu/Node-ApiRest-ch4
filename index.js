const express = require("express");
const bodyParser = require("body-parser");

const api = require("./src/routes");

const app = express();
const port = 3000;


// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", api);




app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});


