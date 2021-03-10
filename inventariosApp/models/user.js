const login = (email , passwd , callback )=>{
  var err='';
  var bd_data=''; // simula lainfo de la bd
  if (email == 'joe@doe.com' && passwd == '1234') {
    bd_data={
      'email': email,
      'depto': 'ventas',
      'phone': '55314569815'
    }
  } else {
    err = {'mensaje': "cendenciales incorrectas"}
  }
  callback(err,bd_data);
}


exports.login = login;
