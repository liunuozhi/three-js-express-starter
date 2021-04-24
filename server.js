import Bundler from "parcel-bundler";
import express from "express";

const bundleOptions = {};
const entryFile = ["./src/index.html"];
const bundler = new Bundler(entryFile, bundleOptions);

const app = express();
app.use(bundler.middleware());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`ThreeJS App listening at http://localhost:${port}`);
});
