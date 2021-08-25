let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
var mainURL= "http://localhost:3000/api";
var tokenG="";
var usuario;
describe('Libros: ',()=>{

    it('GET  /libros', (done) => {
        chai.request(mainURL)
            .get('/libros')
            .end( function(err,res){
                //console.log(res);
                expect(res).to.have.status(200);
                //console.log(res.body);
                var listado = res.body.libros;
                expect(res.body).to.be.an('Object');
                expect(listado).to.be.an('Array');
                expect(res.body.res).to.be.an('String');
                expect(res.body.res).equals('Success');
                //usuario=listado[0];
                for (let p of listado) {
                    //console.log(p);
                    expect(p).to.be.an('Object');
                    expect(p._id).to.be.an("String");
                    expect(p.titulo).to.be.an("String");
                    expect(p.autor).to.be.an("String");
                    expect(p.isbn).to.be.an("String");
                }
               done();
            });
    });
    it('POST /libros crea un libro', (done) => {
        chai.request(mainURL)
            .post('/libros')
            .send({
                "titulo": "El señor de los anillos: Las dos Torres",
                "autor": "J.R.R. Tolkien",
                "isbn": "1234567890123"
            })
            .end( function(err,res){
                //console.log(res.body);
                expect(res.body).to.be.an("Object");
                var p=res.body.libro;
                usuario=p;
                expect(p).to.be.an('Object');
                //console.log(p._id);
                expect(p._id).to.be.an("String");
                expect(p.titulo).to.be.an("String");
                expect(p.titulo).to.be.equal("El señor de los anillos: Las dos Torres");
                expect(p.autor).to.be.an("String");
                expect(p.autor).to.be.equal("J.R.R. Tolkien");
                expect(p.isbn).to.be.an("String");
                expect(p.isbn).to.be.equal("1234567890123");
                expect(p.__v).to.be.an("Number");
                expect(p.__v).to.be.equal(0);
                done();
            });
    });
    it('GET  /libros/:id', (done) => {
        chai.request(mainURL)
            .get('/libros/'+usuario._id)
            .end( function(err,res){
                //console.log(res);
                expect(res).to.have.status(200);
                //console.log(res.body);
                //expect(res.body).to.be.an("Object");
                var p=res.body.libro;
                usuario=p;
                expect(p).to.be.an('Object');
                //console.log(p._id);
                expect(p._id).to.be.an("String");
                expect(p._id).to.be.equal(usuario._id);
                expect(p.titulo).to.be.an("String");
                expect(p.titulo).to.be.equal("El señor de los anillos: Las dos Torres");
                expect(p.autor).to.be.an("String");
                expect(p.autor).to.be.equal("J.R.R. Tolkien");
                expect(p.isbn).to.be.an("String");
                expect(p.isbn).to.be.equal("1234567890123");
                expect(p.__v).to.be.an("Number");
                expect(p.__v).to.be.equal(usuario.__v);
                done();
            });
    });
    it('PUT /libros/:id edita un usuario', (done) => {
        const ruta='/libros/'+usuario._id;
        //console.log(ruta);
        chai.request(mainURL)
            .put(ruta)
            .send({
                "titulo": "El señor de los anillos: El Retorno del Rey",
                "autor": "J.R.R. Tolkien",
                "isbn": "1234567890123"
            })
            .end( function(err,res){
                expect(res).to.have.status(200);
                //console.log(res.body);
                //expect(res.body).to.be.an("Object");
                var p=res.body.libro;
                usuario=p;
                expect(p).to.be.an('Object');
                //console.log(p._id);
                expect(p._id).to.be.an("String");
                expect(p._id).to.be.equal(usuario._id);
                expect(p.titulo).to.be.an("String");
                expect(p.titulo).to.be.equal("El señor de los anillos: El Retorno del Rey");
                expect(p.autor).to.be.an("String");
                expect(p.autor).to.be.equal("J.R.R. Tolkien");
                expect(p.isbn).to.be.an("String");
                expect(p.isbn).to.be.equal("1234567890123");
                expect(p.__v).to.be.an("Number");
                expect(p.__v).to.be.equal(usuario.__v);
                done();
            });
    });
    it('DELETE  /libros/:id borra un libro', (done) => {
        chai.request(mainURL)
            .delete('/libros/'+usuario._id)
            //.send({id:0, country: "Croacia", year: 2017, days: 10})
            .end( function(err,res){
                //console.log(res);
                expect(res).to.have.status(200);
                //console.log(res.body);
                //expect(res.body).to.be.an("Object");
                var p=res.body.libro;
                usuario=p;
                expect(p).to.be.an('Object');
                //console.log(p._id);
                expect(p._id).to.be.an("String");
                expect(p._id).to.be.equal(usuario._id);
                expect(p.titulo).to.be.an("String");
                expect(p.titulo).to.be.equal("El señor de los anillos: El Retorno del Rey");
                expect(p.autor).to.be.an("String");
                expect(p.autor).to.be.equal("J.R.R. Tolkien");
                expect(p.isbn).to.be.an("String");
                expect(p.isbn).to.be.equal("1234567890123");
                expect(p.__v).to.be.an("Number");
                expect(p.__v).to.be.equal(usuario.__v);
                done();
            });
    });
});



