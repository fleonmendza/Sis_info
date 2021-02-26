<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link href="css/estilos.css" rel="stylesheet" type="text/css">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <title>Login</title>

</head>

    <header class="container pt-3 pb-3 header">
        <div>
            <h2 class="text-center text-azul">
                Super digital
            </h2>
        </div>
    </header>

<body class="body">
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2> Registrate</h2>
            </div>
            <div class="card-body ">
                <form action="index.php" >

                    <div class="form-group row mt-2">
                        <label for="correo" class="col-sm-3 col-form-label"> <h4>Nombre(s):</h4></label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control"  name="Nombre"  required>
                            </div>	
                    </div>

                    <div class="form-group row mt-2">
                        <label for="correo" class="col-sm-3 col-form-label"> <h4>Apellido Paterno</h4></label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control"  name="Apaterno" required>
                            </div>	
                    </div>

                    <div class="form-group row mt-2">
                        <label for="correo" class="col-sm-3 col-form-label"> <h4>Apellido Materno</h4></label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control"  name="Amaterno" required>
                            </div>	
                    </div>

                    <div class="form-group row mt-2">
                        <label for="correo" class="col-sm-3 col-form-label"> <h4>Correo electronico:</h4></label>
                            <div class="col-sm-6">
                                <input type="email" class="form-control"  name="TxtEMail" placeholder="Ejemplo:micorreo@dominio.com" required>
                            </div>	
                    </div>

                    <div class="form-group row mt-2">
                        <label for="correo" class="col-sm-3 col-form-label"> <h4>Escriba su Contraseña:</h4></label>
                            <div class="col-sm-6">
                                <input type="password" class="form-control"  name="password" required>
                            </div>	
                    </div>

                    <div class="mt-3 d-flex justify-content-center ">
                        <button type="submit" class="btn btn-primary btn-lg btn-block col-12">Aceptar</button>
                        
                    </div>

                </form>
            </div>
        </div>
    
    </div>

    
</body>
</html>