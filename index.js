import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { db } from "./db.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

db.connect((err) => {
  console.log("app is connecting....");
  if (!err) {
    const Port = 8000;
    app.listen(Port, () => {
      console.log("app is running at " + Port);
    });
  } else {
    console.log(err);
  }
});

//API__Routers

app.use("/auth", authRouter);
app.use("/user", userRouter);
