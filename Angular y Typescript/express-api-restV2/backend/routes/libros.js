var express = require('express');
var router = express.Router();
var LibroDao= require("../models/libro");

/* GET libros devuelve un listado de libros. */
router.get('/', function(req, res, next) {

  //coger de bbdd el listado de libros
  LibroDao.find(function( err, libros, count )
  {
    if(err!=null){
      res.json({
        res:"Error",
        error:err
      });
    }else{
      // console.log(libros);
      res.json({
        res:"Success",
        libros: libros
      });
    }
  res.end();
  });
  /*
  var listado=[
    {
      autor:"Buenos presagios",
      titulo:"Terry Pratchett & Neal Gaiman",
      isbn:"123456576779789"
    },
    {
      autor:"El color de la magia",
      titulo:"Terry Pratchett",
      isbn:"21324523546524674"
    },
    {
      autor:"El señor de los anillos: La compañía del anillo",
      titulo:"J.R.R. Tolkien",
      isbn:"213124135356347"
    }
  ];
  res.json(listado);
   */
});
/* Post debe permitir dar de alta un libro */
router.post('/', function(req, res, next) {
  //datos como query (parametors)
  //console.log(req.query);
  //var libro=req.query;
  // Datos dentro del body
  //console.log(req.body);
  var libro=req.body;
  // Guardar en la BBDD el objeto de libro
  /*
  LibroDao.insert(libro,function (err, libro){
    if(err!=null){
      // Si sale mal
      res.json({res:"Error",message:err});
    }else{
      //console.log(user);
      // si sale bien
      res.json({res:"Success",libro:libro});
    }
    res.end();
  });
  */
  new LibroDao(libro).save(function(err, libro, count)
  {
    if(err!=null){
      // Si sale mal
      res.json({res:"Error",message:err});
    }else{
      //console.log(user);
      // si sale bien
      res.json({res:"Success",libro:libro});
    }
    res.end();

  });
});
/* Get /:isbn devolver el libro que le indico con isbn */
router.get('/:id', function(req, res, next) {
  // recoger el parámetro por url
  var id=req.params.id;
  //console.log(isbn);
  //consultar a la bbdd para buscar el libro con ese id
  LibroDao.findOne({_id: id}, function (err, libro)
  {
    if (err!=null){
      res.json({res:"Error",error:err});
    } else{
      res.json({res:"Success",libro: libro});
    }
    res.end();
  });
  /*
  var libro={
    "autor": "Terry Pratchett",
    "titulo": "Dioses Menores",
    "isbn": "12312454554"
  };
  res.json(libro);
  */
});
/* POST/PUT /:id modificar el libro con id */
router.put('/:id', function(req, res, next) {
  // recoger el parámetro por url
  var id=req.params.id;
  //Recoger los datos del libro
  // Datos dentro del body
  //console.log(req.body);
  var libro=req.body;
  //modificar en la bbdd el libro con ese id
  LibroDao.findOneAndUpdate({_id: id},libro,{new : true},(err,libro)=> {
    if(err!=null){
      res.json({res:"Error",error:err});
    }else{
      res.json({res: "Success", "libro": libro});
    }
  });
  //devolver el libro modificado
  //res.json(libro);
  //res.end();
});
/* Get/Detele /:id/delete borrar el libro que le indico con id */
router.delete('/:id', function(req, res, next) {
  // recoger el parámetro por url
  var id=req.params.id;
  // borrar el libro de la bbdd
  LibroDao.findOneAndRemove({_id: id})
      .exec(function(err, libro, count)
      {
        if(err!=null){
          res.json({res:"Error",error:err});
        }else{
          res.json({res:"Success",libro:libro});
        }
      });
  /*
  var libro={
    "autor": "Terry Pratchett",
    "titulo": "Dioses Menores",
    "isbn": "12312454554"
  };
  // devolver el libro borrado
  res.json(libro);

   */
  //res.end();
});

module.exports = router;
