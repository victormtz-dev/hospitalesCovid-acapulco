const {Schema, model} = require('mongoose');

const HospitalSchema = new Schema({
    nombreHospital: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    tipoServicioMedico: {
        type: String,
        required: true
    },
    estacionamiento: {
        type: String,
        required: true
    },
    rampas: {
        type: String,
        required: true
    },
    elevadores: {
        type: String,
        required: true
    },
    ambulancias: {
        type: Number,
        required: true
    },
    paginaWeb: {
        type: String,
        required: false
    },
    correo: {
        type: String,
        required: true
    },
    camasTotales: {
        type: Number,
        required: true
    },
    camasOcupadas: {
        type: Number,
        required: true
    },
    camasDisponibles:{
        type: Number,
        required: true
    }
}, {
    timestamps: true
});


module.exports = model('Hospital', HospitalSchema);

//hospital = nombre del hospital
//direccion = direccion del hospital
//horario = horario de atencion del hospital
//telefono = telefono del hospital
//tipoServicioMedico = sera el tipo del hospital (publico o privado)
//estacionamiento = el hospital cuenta con estacionamiento? SI/NO
//rampas = el hospital cuenta con rampas? SI/NO
//elevadores = el hospital cuenta con elevador? SI/NO
//ambulancias = numero de ambulancias disponibles
//paginaweb = link de la pagina web
//correo = correos electronicos
//camasTotales = camas totales (SOLO CAMAS COVID)
//camasOcupadas = camas ocupadas
//camasDisponibles = camas disponibles
