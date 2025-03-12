"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//import { productosRoutes } from './routes/index.ts';
dotenv_1.default.config({ path: "/home/Proyecto/products/src/.env" });
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("productos corriendo " + port);
});
//app.use("/productos",productosRoutes);
app.listen(port, () => {
    console.log("Mi primer Servicio de Productos!", port);
});
