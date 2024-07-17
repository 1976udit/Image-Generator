import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./mongoDB/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit : "50mb"}));

app.get("/" , (req,res) => {
   res.send("Hello Ai")
})

const startServer =async () => {
     
     try {
        // connectDB(process.env.MONGO_URI);
        app.listen(8080, () => console.log("Hey Ai"))
     } catch (error) {
        console.log(error)
     }

     
}
startServer();