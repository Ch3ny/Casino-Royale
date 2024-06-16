const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
mongoose
.connect("mongodb+srv://admin:adminadmin@casino.0scqtjh.mongodb.net/?retryWrites=true&w=majority&appName=Casino")
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));


const accountsRouter = require("./routes/accounts");
const guessRouter = require("./routes/guessRoutes");
const scratchRouter = require("./routes/scratchRoutes");

app.use(cors());
app.use(express.json());

app.use("/accounts", accountsRouter);
app.use("/guess", guessRouter);
app.use("/scratch", scratchRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
