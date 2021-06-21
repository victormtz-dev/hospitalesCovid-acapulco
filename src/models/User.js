const {Schema, model} = require('mongoose');
const cript = require('bcryptjs')

const UserSchema = new Schema ({
    nombre: { type: String, required:true},
    apellidoPaterno: { type: String, required:true},
    apellidoMaterno: { type: String, required:true},
    correo: { type: String, required:true, unique: true},
    password: { type: String, required:true}
}, {
    timestamps: true
});


UserSchema.methods.encrypPassword = async password =>{
   const salt = await cript.genSalt(10);
   return await cript.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password){
   return await cript.compare(password, this.password)
};


module.exports = model('User', UserSchema);
