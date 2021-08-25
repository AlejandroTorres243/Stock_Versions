var express = require('express');
var router = express.Router();
var MediaDao= require("../models/media");
// gestor de uploads/forms
const formidable = require('formidable');
// generador de crypto
var crypto = require('crypto');
/* GET file list. */
router.get('/', function(req, res, next) {
    MediaDao.find(function( err, medias, count )
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
                medias: medias
            });
        }
        res.end();
    });
});
/* POST FILE. */
router.post('/', function(req, res, next) {
    //console.log(req);
    // TODO: pendiente comprobar tipos de ficheros
    var form = new formidable.IncomingForm();
    form.parse(req);
    //console.log(form);
    var fileHash,fileExtension, filename, savedFilename;
    form.on('fileBegin', function (name, file){
        //Cálculo de hash
        fileHash=crypto.createHash('md5').update(file.name+new Date()).digest("hex");
        fileExtension=file.name.split(".").pop();
        filename=file.name.split("."+fileExtension)[0];
        savedFilename=filename +'-'+fileHash+"."+fileExtension;
        file.path = __dirname + '/../public/uploads/' + savedFilename;
    });

    form.on('file', function (name, file){
        //console.log(file);
        file.urlPath='/uploads/' + savedFilename;
        new MediaDao(file).save(function(err, file, count)
        {
            if(err!=null){
                // Si sale mal
                res.json({res:"Error",message:err});
            }else{
                //console.log(file);
                // si sale bien
                res.json({res:"Success",file:file});
            }
            res.end();
        });
    });

});

router.get('/:id', function(req, res, next) {
    // recoger el parámetro por url
    var id=req.params.id;
    //console.log(isbn);
    //consultar a la bbdd para buscar el libro con ese id
    LibroDao.findOne({_id: id}, function (err, media)
    {
        if (err!=null){
            res.json({res:"Error",error:err});
        } else{
            res.json({res:"Success",media:media});
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

router.delete('/:id', function(req, res, next) {
    // recoger el parámetro por url
    var id=req.params.id;
    // borrar el libro de la bbdd
    MediaDao.findOneAndRemove({_id: id})
        .exec(function(err, media, count)
        {
            if(err!=null){
                res.json({res:"Error",error:err});
            }else{
                //TODO: Borrar fichero
                res.json({res:"Success",media:media});
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
