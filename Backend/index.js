import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import route  from "./Routes/UserRoutes.js";


const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/", route)


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connection estashblishment")
}).catch((error) => {
    console.log(error)
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})