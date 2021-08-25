var mongoose = require('mongoose');
var conString = process.env.DATABASE_URL;
//console.log(conString);
mongoose.connect(
    conString,
    { useNewUrlParser: true ,useFindAndModify:false}
).then(
    () => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log("Conexión realizada a:"+ conString);
    },
    err => {
        /** handle initial connection error */
        console.log("Conexión fallida: "+err);
    }
);

module.exports = mongoose;
