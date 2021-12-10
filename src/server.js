import "dotenv/config";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const practiceRouter = require("./routes/practice");
const businessRulesRouter = require("./routes/businessRule");

const app = express();

app.use(helmet());
app.use(morgan("combined"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Routes

app.use("/api/practices", practiceRouter);
app.use("/api/businessRules", businessRulesRouter);

app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${process.env.PORT}`);
});
