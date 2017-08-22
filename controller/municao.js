module.exports.municoes = function (app, req, res) {

  var connection = app.config.dbConnection();
  var municaoDAO = new app.models.MunicaoDAO(connection);

  municaoDAO.listar(function (error, result) {
    res.render("municoes", { municoes: result });
  });

}

module.exports.novo = function (app, req, res) {
    var municao = [{
      idmunicao: '',
      calibre: '',
      descricao: ''
    }];

    res.render('municao', { municao: municao });
}

module.exports.deletar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var municaoDAO    = new app.models.MunicaoDAO(connection);
  var id     = req.params.id; 

  municaoDAO.getById(id, function (error, result) {
    municaoDAO.deletar(id, function (error, result) {
      res.redirect('/municoes');
    });
  });
}

module.exports.editar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var municaoDAO  = new app.models.MunicaoDAO(connection);
  var id            = req.params.id;  
  
  municaoDAO.getById(id, function (error, result) {
    res.render("municao", { municao: result });
  });
}


module.exports.salvar = function (app, req, res) {
  
  var connection = app.config.dbConnection();
  var municaoDAO = new app.models.MunicaoDAO(connection);
  var municao = req.body;

  municaoDAO.salvar(municao, function (error, result) {
    municaoDAO.listar(function (error, result) {
      res.redirect('/municoes');
    });
  });
}
