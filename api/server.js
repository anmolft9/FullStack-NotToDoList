import express, { Router } from "express";
import helmet from "helmet";
import cors from "cors";
import path from "path";

const app = express();

const PORT = 8000;

//middlewares
app.use(express.json());
app.use(helmet()); ///to protect against theft of cookies
app.use(cors()); // lets us use multi server

///db connect
import { dbConnect } from "./src/routers/config/dbConfig.js";
dbConnect();

////routers
import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/task", taskRouter);

///static content serve  ////
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use("/", (req, res) => {
  res.send(path.join(__dirname, "/frontend/build/index.html"));
});

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "you have reached not to do api",
  });
});

app.use((error, req, res, next) => {
  //   console.log(error, "error");
  const status = error.status || 500;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
  // writing file system to log error
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running on port http://localhost:${PORT}`);
});
