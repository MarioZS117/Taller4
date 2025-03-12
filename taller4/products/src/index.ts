import express from 'express';
import dotenv from "dotenv";
import {productosRoutes} from "./routes/index";
import {pool} from "./models/db.";
dotenv.config({path:"/home/taller4/products/src/.env"});
 
const app = express();
const port = process.env.PORT || 3001;

app.get("/",(req,res)=>{
    res.send("productos corriendo " + port);
});
app.use("/productos",productosRoutes);

app.listen(port,()=>{
  console.log("Mi primer Servicio de Productos!",port);
});
async function obtenerProductos(){
  try{
    const [tablas]= await pool.query('select * from productos');
    console.log(tablas);

  }catch (error){
    console.error('Error obteniendo productos', error);
  }
}

obtenerProductos();