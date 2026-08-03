import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 5050;

app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
