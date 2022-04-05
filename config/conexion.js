const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'esedor',
    password: 'esedor',
    port: '3306',
    database: 'esedor'
});


conexion.connect((err) => {
    if(err){
        console.log('ha ocurrido un error: ' + err)
    }else{
        console.log('conexion exitosa')
    }
})

module.exports = conexion;