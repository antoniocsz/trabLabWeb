module.exports.acessorios = function (app, req, res) {

  var connection = app.config.dbConnection();
  var acessorioDAO = new app.models.AcessorioDAO(connection);

  acessorioDAO.listar(function (error, result) {
    res.render("acessorios", { acessorios: result });
  });

}

module.exports.novo = function (app, req, res) {
    var acessorio = [{
      idacessorio: '',
      descricao: ''
    }];

    res.render('acessorio', { acessorio: acessorio });
}

module.exports.deletar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var acessorioDAO  = new app.models.AcessorioDAO(connection);
  var id            = req.params.id; 

  acessorioDAO.getById(id, function (error, result) {
    acessorioDAO.deletar(id, function (error, result) {
      res.redirect('/acessorios');
    });
  });
}

module.exports.editar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var acessorioDAO  = new app.models.AcessorioDAO(connection);
  var idacessorio            = req.params.idacessorio;  
  
  acessorioDAO.getById(id, function (error, result) {
      res.render("acessorio", { acessorio: result });
  });
}


module.exports.salvar = function (app, req, res) {
  
  var connection = app.config.dbConnection();
  var acessorioDAO = new app.models.AcessorioDAO(connection);
  var roteiro = req.body;

  acessorioDAO.salvar(roteiro, function (error, result) {
    acessorioDAO.listar(function (error, result) {
      res.redirect('/acessorios');
    });
  });
}
