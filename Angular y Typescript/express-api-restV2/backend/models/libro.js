var mongoose= require('./conection');

//mongoose.connect('mongodb://localhost:27017/user',{ useNewUrlParser: true });
const Libro = mongoose.model(
    'Libros',
    {
        isbn: String,
        titulo:String,
        autor:String
    }
);


