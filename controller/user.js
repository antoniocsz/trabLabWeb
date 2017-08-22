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

module.exports.deletar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var userDAO = new app.models.UserDAO(connection);
  var id            = req.params.id; 

  userDAO.getById(id, function (error, result) {
    userDAO.deletar(id, function (error, result) {
      res.redirect('/usuarios');
    });
  });
}

module.exports.editar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var userDAO       = new app.models.UserDAO(connection);
  var id            = req.params.id;  
  
  userDAO.getById(id, function (error, result) {
    //console.log(result);
    res.render("user", { usuario: result });
  });
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
