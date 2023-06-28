import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js"
import proxy from "express-http-proxy";

const app = express(); 

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 1000;

app.use("/user", userRoutes);
app.use("/driver", proxy("http://localhost:1300/")) 

// at http://localhost:1000/driver/driver can view that server's results!! TODO: better naming to remove confusion

const CONNECTION_URL = "mongodb://0.0.0.0:27017/HackathonUsers"; 

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });

app.listen(PORT, () => {
    console.log("Gateway Server started on 1000");
  });
  