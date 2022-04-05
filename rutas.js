const rutas = require('express').Router();
const conexion = require('./config/conexion')

//Rutas
rutas.get('/', (req, res) =>{
    let sql = 'select * from empresa'
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


rutas.get('/:id', (req, res) =>{
    const {id} = req.params
    let sql = 'select * from empresa where id = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

rutas.post('/', (req, res) =>{
    const {name, tipo, descrip, est} = req.params
    let sql = `insert into empresa(name, tipo, descrip, est) values('${name}','${tipo}', '${descrip}','${est}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})


module.exports = rutas