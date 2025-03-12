//import { Request, Response } from "express";
import { pool } from "../models/db.";
export const getAll = async (req: any, res: any) => {
    // res.send("Lista de productos ");

    try{
        const [tablas]= await pool.query('select * from productos');
        res.status(200).json(tablas)({
            success: true,
            data: tablas
        })
    }
        catch (error){
            res.status(500).json({
                success: false,
                error: 'Error obteniendo productos'
            })

    }
}
