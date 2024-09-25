import { solicitudes } from "../modelos/solicitudesModelo.js";

// Crear solicitud de adopción
const agregarSolicitud = (req, res) => {
    const { nombreSolicitante, email, idMascota } = req.body;

    if (!nombreSolicitante || !email || !idMascota) {
        return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
    }

    const nuevaSolicitud = {
        nombreSolicitante,
        email,
        idMascota,
        estado: 'pendiente',
    };

    solicitudes.create(nuevaSolicitud)
        .then(resultado => {
            res.status(201).json({ mensaje: "Solicitud de adopción creada con éxito", resultado });
        })
        .catch(err => {
            res.status(500).json({ mensaje: `Error al crear solicitud: ${err}` });
        });
};

// Buscar todas las solicitudes
const buscarSolicitudes = (req, res) => {
    solicitudes.findAll()
        .then(resultados => {
            res.status(200).json(resultados);
        })
        .catch(err => {
            res.status(500).json({ mensaje: `Error al buscar solicitudes: ${err}` });
        });
};

// Buscar solicitud por ID
const buscarId = (req, res) => {
    const id = req.params.id;

    solicitudes.findByPk(id)
        .then(resultado => {
            if (resultado) {
                res.status(200).json(resultado);
            } else {
                res.status(404).json({ mensaje: "Solicitud no encontrada." });
            }
        })
        .catch(err => {
            res.status(500).json({ mensaje: `Error al buscar solicitud: ${err}` });
        });
};

// Actualizar solicitud
const actualizarSolicitud = (req, res) => {
    const id = req.params.id;
    const { estado, nombreSolicitante, email, fechaSolicitud } = req.body;

    // Validación de campos obligatorios
    if (!estado && !nombreSolicitante && !email && !fechaSolicitud) {
        return res.status(400).json({ mensaje: "Al menos uno de los campos estado, nombreSolicitante, email o fechaSolicitud es obligatorio." });
    }

    // Crear un objeto con los campos a actualizar
    const fieldsToUpdate = {};
    if (estado) fieldsToUpdate.estado = estado;
    if (nombreSolicitante) fieldsToUpdate.nombreSolicitante = nombreSolicitante;
    if (email) fieldsToUpdate.email = email;
    if (fechaSolicitud) fieldsToUpdate.fechaSolicitud = fechaSolicitud;

    solicitudes.update(fieldsToUpdate, { where: { id } })
        .then(([affectedRows]) => {
            if (affectedRows) {
                res.status(200).json({ mensaje: "Solicitud actualizada con éxito." });
            } else {
                res.status(404).json({ mensaje: "Solicitud no encontrada." });
            }
        })
        .catch(err => {
            res.status(500).json({ mensaje: `Error al actualizar solicitud: ${err}` });
        });
};


// Eliminar solicitud
const eliminarSolicitud = (req, res) => {
    const id = req.params.id;

    solicitudes.destroy({ where: { id } })
        .then(affectedRows => {
            if (affectedRows) {
                res.status(200).json({ mensaje: "Solicitud eliminada con éxito." });
            } else {
                res.status(404).json({ mensaje: "Solicitud no encontrada." });
            }
        })
        .catch(err => {
            res.status(500).json({ mensaje: `Error al eliminar solicitud: ${err}` });
        });
};

export { agregarSolicitud, buscarSolicitudes, buscarId, actualizarSolicitud, eliminarSolicitud };
