const express = require('express');
const app=express();

require("dotenv").config();
const cors= require('cors');
const PORT =process.env.PORT || 4000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const dataRoutes =require("./routes/data");

app.use("/api",dataRoutes);

app.listen(PORT, ()=>{
    console.log("Server started At",PORT);
});

const dbConnect=require("./config/database");
dbConnect();    