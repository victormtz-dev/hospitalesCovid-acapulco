const hospitalCtrl = {};
const Hospital = require('../models/Hospital');

hospitalCtrl.renderHospitalForm= (req,res) => {
    res.render('hospitals/new-hospital')
}

hospitalCtrl.createHospital= async (req,res) => {
    const {nombreHospital,
    tipoServicioMedico,
    direccion,
    horario,
    telefono,
    paginaWeb,
    correo,
    estacionamiento,
    elevadores,
    rampas,
    ambulancias,
    camasTotales,
    camasOcupadas
} = req.body;

    const camasDisponibles = camasTotales - camasOcupadas;

    const newHospital = new Hospital({nombreHospital, direccion, horario, telefono, tipoServicioMedico, estacionamiento, rampas, elevadores, ambulancias, paginaWeb, correo, camasTotales, camasOcupadas, camasDisponibles}) 

    await newHospital.save()
    req.flash('success_msg', 'Hospital Agregado Satisfactoriamente')
    res.redirect('/hospital');
};

hospitalCtrl.renderHospitals= async (req,res) => {
    const hospitalesMostrar = await Hospital.find().sort({createdAt: -1});
    res.render('hospitals/all-hospitals', { hospitalesMostrar });
};

hospitalCtrl.renderHospitalsGrafic= async (req,res) => {
    const hospitalesGrafica = await Hospital.find();
    res.render('hospitals/grafica-hospital', { hospitalesGrafica });
};

hospitalCtrl.renderEditForm = async (req,res) => {
    const hospitalEdit = await Hospital.findById(req.params.id);
    res.render('hospitals/edit-hospitals', {hospitalEdit});
};

hospitalCtrl.updateHospital = async (req,res) => {
    const {nombreHospital,
        tipoServicioMedico,
        direccion,
        horario,
        telefono,
        paginaWeb,
        correo,
        estacionamiento,
        elevadores,
        rampas,
        ambulancias,
        camasTotales,
        camasOcupadas,
        camasDisponibles
    } = req.body;
    await Hospital.findByIdAndUpdate(req.params.id, {nombreHospital, direccion, horario, telefono, tipoServicioMedico, estacionamiento, rampas, elevadores, ambulancias, paginaWeb, correo, camasTotales, camasOcupadas, camasDisponibles})
    req.flash('success_msg', 'Hospital Editado Satisfactoriamente');
    res.redirect('/hospital');
};

hospitalCtrl.deleteHospital = async (req,res) => {
    await Hospital.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Hospital Eliminado Satisfactoriamente');
    res.redirect('/hospital');
};

module.exports = hospitalCtrl;