module.exports.militares = function (app, req, res) {

  var connection = app.config.dbConnection();
  var militarDAO = new app.models.MilitarDAO(connection);

  militarDAO.listar(function (error, result) {
    res.render("militares", { militares: result });
  });

}

module.exports.novo = function (app, req, res) {
    var militar = [{
      idmilitar: '',
      posto: '',
      nomeguerra: '',
      Usuario_idUsuario: ''
    }];

    res.render('militar', { militar: militar });
}

module.exports.deletar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var militarDAO  = new app.models.MilitarDAO(connection);
  var id            = req.params.id; 

  militarDAO.getById(id, function (error, result) {
    militarDAO.deletar(id, function (error, result) {
      res.redirect('/militares');
    });
  });
}

module.exports.editar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var militarDAO  = new app.models.MilitarDAO(connection);
  var userDAO  = new app.models.UserDAO(connection);
  var id            = req.params.id;  


  userDAO.listar(function(error, result) {
    var usuarios = result; 
    militarDAO.getById(id, function (error, result) {
        res.render("militar", { militar: result, usuarios: usuarios });
    });
  });  
}


module.exports.salvar = function (app, req, res) {
  
  var connection = app.config.dbConnection();
  var militarDAO = new app.models.MilitarDAO(connection);
  var roteiro = req.body;

  militarDAO.salvar(roteiro, function (error, result) {
    militarDAO.listar(function (error, result) {
      res.redirect('/militares');
    });
  });
}
