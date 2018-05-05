const mongoose = require('mongoose');
const Equipo = mongoose.model('Equipo');

/* GET home page. */
const index = function (req, res) { 
  res.render('index');
};

const informacion = function (req, res) { 
  res.render('informacion');
};

const participantes = function (req, res) { 
  Equipo
    .find()
        .exec((err, equipos) => {
          if (err) { 
            res.render('error', { 
              error : err
            });    
              } else {
            res.render('participantes', {
              title: 'Equipos', 
              equipos: equipos 
            });
          }
        })
      };

const leaderboard = function (req, res) { 
  res.render('leaderboard');
};

const anuncios = function (req, res) { 
  res.render('anuncios');
};

const fixture = function (req, res) { 
  res.render('fixture');
};

const form = function (req, res) { 
  res.render('equiposForm');
};

const formSubmit = function (req, res) { 
  var newIntegrante1 = {
    nombre: req.body.Nombre1,
    apellido: req.body.Apellido1,
    nickname: req.body.Nickname1,
    DNI: req.body.DNI1,
    edad: req.body.Edad1,
    sexo: req.body.Sexo1,
    foto: req.body.Foto1,
    cartaFavorita: req.body.CartaFavorita1,
    claseFavorita: req.body.ClaseFavorita1,
  }
  var newIntegrante2 = {
    nombre: req.body.Nombre2,
    apellido: req.body.Apellido2,
    nickname: req.body.Nickname2,
    DNI: req.body.DNI2,
    edad: req.body.Edad2,
    sexo: req.body.Sexo2,
    foto: req.body.Foto2,
    cartaFavorita: req.body.CartaFavorita2,
    claseFavorita: req.body.ClaseFavorita2,
  }
var newIntegrante3 = {
    nombre: req.body.Nombre3,
    apellido: req.body.Apellido3,
    nickname: req.body.Nickname3,
    DNI: req.body.DNI3,
    edad: req.body.Edad3,
    sexo: req.body.Sexo3,
    foto: req.body.Foto3,
    cartaFavorita: req.body.CartaFavorita3,
    claseFavorita: req.body.ClaseFavorita3,
  }

  var newEquipo = {
    nombre: req.body.NombreEquipo,
    institucion: req.body.Institucion,
    icono: req.body.IconoEquipo,
    integrantes: [newIntegrante1, newIntegrante2, newIntegrante3]
  }

  conn.collection('integrantes').insert([newIntegrante1,newIntegrante2,newIntegrante3], function(err,result){
    if (err){
      console.log(err);
    };  
  });

conn.collection('equipos').insert(newEquipo, function(err,result){
    if (err){
      console.log(err);
    }
    res.redirect('/form');
  });


};

module.exports = {
  index,
  informacion,
  participantes,
  leaderboard,
  anuncios,
  fixture,
  form,
  formSubmit
}