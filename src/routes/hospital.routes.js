const {Router} = require('express');
const router = Router();

const {renderHospitalForm, 
    createHospital, 
    renderHospitals, 
    renderEditForm, 
    updateHospital, 
    deleteHospital,
    renderHospitalsGrafic
} = require('../controllers/hospital.controllers');

const {isAuthenticated} = require('../helpers/auth');

//agregar hospital
router.get('/hospital/add',isAuthenticated, renderHospitalForm);

router.post('/hospital/new-hospital',isAuthenticated, createHospital);

//obtener todos los hospitales
router.get('/hospital', isAuthenticated, renderHospitals)

router.get('/hospital/grafica', isAuthenticated, renderHospitalsGrafic)

//editar hospitales
router.get('/hospital/edit/:id', isAuthenticated, renderEditForm);

router.put('/hospital/edit/:id', isAuthenticated, updateHospital);

//eliminar hospitales
router.delete('/hospital/delete/:id', isAuthenticated, deleteHospital);

module.exports = router;