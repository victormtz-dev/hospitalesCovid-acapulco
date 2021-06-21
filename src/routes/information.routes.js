const {Router} = require('express');
const router = Router();

const {renderHospitalsAca, renderMapa} = require('../controllers/information.controllers');


//obtener la pagina de hospitales de acapulco
router.get('/information/hospital/acapulco', renderHospitalsAca)

//obtener la pagina de mapa
router.get('/information/mapa', renderMapa)


module.exports = router;
