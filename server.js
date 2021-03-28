const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(
  "/build/",
  express.static(path.join(__dirname, "node_modules/three/build"))
);
app.use(
  "/jsm/",
  express.static(path.join(__dirname, "node_modules/three/examples/jsm"))
);

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is running on http://localhost:${port}/`);
  } else {
    console.log(err);
  }
});
