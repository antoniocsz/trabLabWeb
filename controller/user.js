module.exports.usuarios = function (app, req, res) {

  var connection = app.config.dbConnection();
  var userDAO = new app.models.UserDAO(connection);

  userDAO.listar(function (error, result) {
    res.render("users", { usuarios: result });
  });

}

module.exports.novo = function (app, req, res) {

    var usuario = [{ 
      idUsuario: '', 
      login: '', 
      senha: '', 
      nomecompleto: '' 
    }];

    res.render('user', { usuario: usuario });
}

module.exports.editar = function (app, req, res) {
    
}


module.exports.salvar = function (app, req, res) {
  
  var connection = app.config.dbConnection();
  var userDAO = new app.models.UserDAO(connection);
  var roteiro = req.body;

  userDAO.salvar(roteiro, function (error, result) {
    userDAO.listar(function (error, result) {
      res.redirect('/usuarios');
    });
  });
}
