const informationCtrl = {};
const Hospital = require('../models/Hospital');


//mostrar mapa
informationCtrl.renderMapa = async (req,res) => {
    const hospitalesAcaNombre = await Hospital.find().sort({nombreHospital: 1});
    res.render('information/mapa', {hospitalesAcaNombre})
}

informationCtrl.renderHospitalsAca= async (req,res) => {
    const hospitalesAcaCamas = await Hospital.find().sort({camasDisponibles: -1});
    const hospitalesAcaNombre = await Hospital.find().sort({nombreHospital: 1});
    res.render('information/hospitals-aca', { hospitalesAcaCamas, hospitalesAcaNombre});
};

module.exports = informationCtrl;