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
// extra note (learning purpose):  the headers intact, including the Authorization header with the token. The backend server at http://localhost:1300/ can then access the token in the same way as your initial server.

const CONNECTION_URL = "mongodb://0.0.0.0:27017/A42023Users"; 

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
  