import { Express } from "express";
import dotenv from "dotenv";
import axios from "axios";
import express from 'express';
dotenv.config({path:"../src/.env"});

const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("api gateway corriendo " + port);
});
app.listen(port,()=>{
  console.log("Mi primer Servicio de API Gateway!",port);
});

app.get("/productos",async (req,res)=>{
  const respuesta = await axios.get("http://localhost:3001/productos/all");
  res.send({"Los productos son":respuesta.data})
});