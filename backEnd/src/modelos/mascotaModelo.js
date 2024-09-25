import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";


const mascotas = db.define("mascotas",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},


nombre: {
    type: Sequelize.STRING,
    allowNull: true
},

especie: {
    type: Sequelize.STRING,
    allowNull: false
},
raza: {
    type: Sequelize.STRING,
    allowNull: true
},
edad: {
    type: Sequelize.INTEGER,
    allowNull: true
},
descripcion: {
    type: Sequelize.STRING,
    allowNull: true
},

estado: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'disponible'
},

fecha_registro: {
    type: Sequelize.DATE,
    allowNull: true
},
imagen: {
    type: Sequelize.STRING,
    allowNull: true
}


    
})



export {mascotas}
