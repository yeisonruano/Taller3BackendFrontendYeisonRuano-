import { db } from "../database/conexion.js";
import Sequelize from "sequelize";

const solicitudes = db.define("solicitudes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreSolicitante: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    idMascota: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pendiente'
    },
    fechaSolicitud: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    }
});

export { solicitudes };
