const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'password'
}, async (correo, password, done) => {

    //si coincide el correo
    const user = await User.findOne({correo});
    if(!user){
        return done(null, false, { message: 'No se ha encontrado el usuario'});
    } else {
        //validar la contraseña
     const match = await user.matchPassword(password);
     if(match){
         return done(null, user)
     } else {
         return done(null, false, { message: 'Contraseña incorrecta'});

     }
    }

}));

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err,user);
    })
})