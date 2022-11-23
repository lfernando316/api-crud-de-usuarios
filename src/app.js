const express = require("express");

const crudRouter = require("./crudUsers/crud.router");

const port = 9000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

app.use("/api/v1", crudRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
