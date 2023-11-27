import dotenv from "dotenv";

import Database from "./db/Database.js"
import { app } from "./app.js";


dotenv.config({
    path:"./env"
})

Database()
.then(()=>{
    app.on("error",(error)=>{
        console.log("Error:=>>",error);
        throw error;
    })

    app.listen(process.env.PORT || 4000 ,  ()=>{
        console.log(`Server is running on :=>>> ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(`MongoDB connection Failed:=>> ${error}`)
})


