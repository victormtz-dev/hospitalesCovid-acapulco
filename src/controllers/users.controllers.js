const usersCtrl = {};
const User = require('../models/User');
const passport = require('passport');

usersCtrl.renderSingUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const errors = [];
   const {nombre, 
    apellidoPaterno, 
    apellidoMaterno, 
    correo, 
    password, 
    confirm_password} = req.body;

    if(password != confirm_password){
        errors.push({text:'Contraseñas no coinciden'});
    }
    if(password.length < 4){
        errors.push({text: 'La contraseña debe tener almenos 4 caracteres'});
    }
    if(errors.length > 0){
        res.render('users/signup', {
            errors,
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            correo
        })
    } else {
        const correoUser = await User.findOne({correo: correo});
        if(correoUser){
            req.flash('error_msg', 'El correo ya esta en uso');
            res.redirect('/users/signup');
        }else {
            const newUser = new User({nombre, apellidoPaterno, apellidoMaterno, correo, password});
            newUser.password = await newUser.encrypPassword(password)
            await newUser.save();
            req.flash('success_msg', 'Se registro satisfactoriamente. Ya puede iniciar sesion.');
            res.redirect('/users/signin');
        }
       
    }

};

usersCtrl.renderSingInForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/hospital',
    failureFlash: true
});


usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Cerraste Sesion.');
    res.redirect('/users/signin');
};

module.exports = usersCtrl;