import express from "express";
import { 
    agregarSolicitud, 
    buscarSolicitudes, 
    buscarId, 
    actualizarSolicitud, 
    eliminarSolicitud 
} from "../controladores/solicitudesController.js";

const routerSolicitudes = express.Router();

routerSolicitudes.get('/', (req, res) => {
    res.send('empresa_adopcion este es el Sitio de Solicitudes de Adopción');
});

routerSolicitudes.post('/crear', (req, res) => {
    agregarSolicitud(req, res);
});

routerSolicitudes.get('/buscar', (req, res) => {
    buscarSolicitudes(req, res);
});

routerSolicitudes.get('/buscar/:id', (req, res) => {
    buscarId(req, res);
});

routerSolicitudes.put('/actualizar/:id', (req, res) => {
    actualizarSolicitud(req, res);
});

routerSolicitudes.delete('/eliminar/:id', (req, res) => {
    eliminarSolicitud(req, res);
});

export { routerSolicitudes };
