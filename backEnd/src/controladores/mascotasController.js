import { mascotas } from "../modelos/mascotaModelo.js";

//Crear un recurso Mascota
const crear = (req,res)=>{

    //Validar 
    if(!req.body.nombre){
        res.status(400).send({
            mensaje: "El nombre no puede estar vacio."
        });
        return;
    }

    const dataset = {
        nombre: req.body.nombre,
        especie: req.body.especie,
        raza: req.body.raza,
        edad: req.body.edad,
        descripcion: req.body.descripcion,
        estado: req.body.estado || 'disponible',
        fecha_registro: new Date(), // Asigna la fecha actual
        imagen:req.body.imagen

    };

    //Usuar Sequelize para crear el recurso en la base de datos
    mascotas.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "Registro de Mascota Creado con Exito"
        });
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `Registro de Mascota No creado ::: ${err}`
        });
    });
}

//Buscar Mascotas
const buscar= (req,res)=>{
    mascotas.findAll().then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje:`No se encontraron registros ::: ${err}`
        });
    });
}


//buscar por ID
const buscarId= (req,res)=>{

    const id=req.params.id;
    if(id==null){
        res.status(400).json({
            mensaje: "El id no puede estar vacio"
        });
        return;
    }
    else{
        mascotas.findByPk(id).then((resultado)=>{
            res.status(200).json(resultado);
        }).catch((err)=>{
            res.status(500).json({
                mensaje:`No se encontraron registros ::: ${err}`
            });
        });

    }
    
}


const actualizar = (req, res) => {
    const id = req.params.id;

    // Verificar que haya datos para actualizar
    if (!req.body.nombre && !req.body.edad && !req.body.especie && !req.body.raza && 
        !req.body.descripcion && !req.body.estado && !req.body.imagen && !req.body.fecha_registro) {
        res.status(400).json({
            mensaje: "No se encontraron Datos para Actualizar"
        });
        return;
    } else {
        // Extraer los datos del cuerpo de la solicitud
        const nombre = req.body.nombre;
        const edad = req.body.edad;
        const especie = req.body.especie;
        const raza = req.body.raza;
        const descripcion = req.body.descripcion;
        const estado = req.body.estado;
        const fecha_registro = req.body.fecha_registro;
        const imagen = req.body.imagen;

        // Crear un objeto de actualización solo con los campos que existan
        const camposActualizados = {};
        if (nombre) camposActualizados.nombre = nombre;
        if (edad) camposActualizados.edad = edad;
        if (especie) camposActualizados.especie = especie;
        if (raza) camposActualizados.raza = raza;
        if (descripcion) camposActualizados.descripcion = descripcion;
        if (estado) camposActualizados.estado = estado;
        if (fecha_registro) camposActualizados.fecha_registro = fecha_registro;
        if (imagen) camposActualizados.imagen = imagen;

        // Actualizar la mascota en la base de datos
        mascotas.update(camposActualizados, { where: { id } })
            .then((resultado) => {
                res.status(200).json({
                    tipo: 'success',
                    mensaje: "Registro Actualizado"
                });
            })
            .catch((err) => {
                res.status(500).json({
                    tipo: 'error',
                    mensaje: `Error al actualizar Registro ::: ${err}`
                });
            });
    }
    

}

//Eliminar Mascota
const eliminar = (req, res) => {
    const id = req.params.id;
    if (id == null) {
      res.status(203).json({
        message: "Debe ingresar un ID!",
      });
      return;
    }
    //implementing delete function
    mascotas.destroy({ where: { id: id } })
      .then((result) => {
        res.status(200).json({
            tipo: 'success',
            mensaje: `Registro con id ${id} Eliminado Correctamente`
        });
      })
      .catch((err) => {
        res.status(500).json({
            tipo: 'error',
            mensaje: `Error al eliminar Registro ::: ${err}`
        });
      });
  };



export {crear,buscar,buscarId,actualizar,eliminar}