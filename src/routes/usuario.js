const express = require('express');
const router = express.Router();

// hace llamado al esquema usuario
const Usuario = require('../models/Usuario');

// ruta que devuelve la información del usuario por según el Id de usuario que quieren obtener
router.get('/:id', (req, res, next) => {
    Usuario.findById(req.params.id, function(err, usuario){
        if(err){
            res.status(500).json({message:'Se ha producido un error al obtener el usuario'})
        }
        else{
            res.json(usuario);
        }        
    })
});

// ruta que obtiene los datos almacenados en el esquema Usuario
router.get('/', (req, res) => {
    Usuario.find(function (err, usuarios) {
        if(err) {            
            res.status(500).send({message: 'Error al listar los usuarios'})
        }
        else {
            res.json(usuarios);
        }
    })
});

// ruta que agrega datos al esquema usuario por metodo POST /usuario - POST
router.post('/',(req, res) => {
    const usuario = new Usuario(req.body);
    usuario.save()
    .then(usuario => {
        res.status(201).json({message: ' El usuario ha sido agregado satisfactoriamente'})
    })
    .catch(err => {
        res.status(400).send({message: 'Se ha producido un error al agregar el usuario '})
    });
});

// actualiza datos al esquema usuario por el método PUT que recibe como parametro el id del usuario
router.put('/:id', (req, res, next) => {
    Usuario.findById(req.params.id, function (err, usuario){
        if(!usuario) {
            return res.status(404).send('No se ha encontrado el usuario');
        } else {
            usuario.name = req.body.name;
            usuario.last_name = req.body.last_name;
            usuario.address = req.body.address;
            usuario.city = req.body.city;
            usuario.state = req.body.state;
            usuario.country = req.body.country;
            usuario.phone = req.body.phone;
            usuario.area_code = req.body.area_code;
            usuario.birthdate = req.body.birthdate;

            usuario.save()
            .then(usuario => {
                res.status(200).json('Usuario Actualizado completamente');
            })
            .catch(err => {
                res.status(400).send('Se ha producido un error al actualizar los datos del usuario');
            });
        }
    })
});

// elimina el dato usuario de la base de datos por el método PUT que recibe como parametro el id del usuario
router.delete('/:id', (req, res, next) => {
    Usuario.findByIdAndRemove(req.params.id, function (err, usuario) {
        if(err) {            
            res.status(400).send('Se ha producido un error al eliminar el usuario');
        }
        else{
            res.json('Usuario eliminado satisfactoriamente');            
        }
    });
});

module.exports = router;