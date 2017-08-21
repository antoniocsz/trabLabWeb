module.exports.armamentos = function (app, req, res) {

  var connection = app.config.dbConnection();
  var armamentoDAO = new app.models.ArmamentoDAO(connection);

  armamentoDAO.listar(function (error, result) {
    res.render("armamentos", { armamentos: result });
  });

}

module.exports.novo = function (app, req, res) {
    var armamento = [{
      id: '',
      numeroserie: '',
      modelo: '',
      fabricante: ''
    }];

    res.render('armamento', { armamento: armamento });
}

module.exports.deletar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var armamentoDAO  = new app.models.ArmamentoDAO(connection);
  var id            = req.params.id; 

  armamentoDAO.getById(id, function (error, result) {
    armamentoDAO.deletar(id, function (error, result) {
      res.redirect('/armamentos');
    });
  });
}

module.exports.editar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var armamentoDAO  = new app.models.ArmamentoDAO(connection);
  var id            = req.params.id;  
  
  armamentoDAO.getById(id, function (error, result) {
      res.render("armamento", { armamento: result });
  });
}


module.exports.salvar = function (app, req, res) {
  
  var connection = app.config.dbConnection();
  var armamentoDAO = new app.models.ArmamentoDAO(connection);
  var roteiro = req.body;

  armamentoDAO.salvar(roteiro, function (error, result) {
    armamentoDAO.listar(function (error, result) {
      res.redirect('/armamentos');
    });
  });
}
