var express = require('express');
var router = express.Router();

// Metodos
router.get('/', (req,res,next)=>{
  res.send('Bienvenido invocador');
  });

router.get('/garen',(req,res,next)=>{
  res.render('campeongaren', { nombre:'Garen' , alias: 'EL PODER DE DEMACIA' });
})

router.get('/ahri',(req,res,next)=>{
  res.render('campeonAhri', { nombre:'Ahri' , alias: 'LA MUJER ZORRO DE NUEVE COLAS' });
})

module.exports = router;
