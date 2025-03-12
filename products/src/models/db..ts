import mysql, {Pool} from "mysql2/promise"

export const pool:Pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
        password:'12345',
        database:'puntoVenta'
})

pool 
    .query('Select * from productos')
    .then(()=>console.log('Conected to Mysql'))
    .catch((err)=>{
        console.log('Error conection to MySQL', err)
    })
    