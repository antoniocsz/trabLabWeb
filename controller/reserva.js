module.exports.reservas = function (app, req, res) {

  var connection = app.config.dbConnection();
  var reservaDAO = new app.models.ReservaDAO(connection);

  reservaDAO.listar(function (error, result) {
    console.log(result);
    res.render("reservas", { reservas: result });
  });

}

module.exports.novo = function (app, req, res) {

    var reserva = [{
      idreserva: '',
      sigla: '',
      descricao: ''
    }];

    res.render('reserva', { reserva: reserva });
}


module.exports.deletar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  // var acessorioDAO  = new app.models.AcessorioDAO(connection);
  // var id            = req.params.id; 

  // acessorioDAO.getById(id, function (error, result) {
  //   acessorioDAO.deletar(id, function (error, result) {
  //     res.redirect('/acessorios');
  //   });
  // });
}

module.exports.editar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  // var acessorioDAO  = new app.models.AcessorioDAO(connection);
  // var id            = req.params.id;  
  
  // acessorioDAO.getById(id, function (error, result) {
  //   res.render("acessorio", { acessorio: result });
  // });
}


module.exports.salvar = function (app, req, res) {
  var connection = app.config.dbConnection();
  // var acessorioDAO = new app.models.AcessorioDAO(connection);
  // var roteiro = req.body;

  // acessorioDAO.salvar(roteiro, function (error, result) {
  //   acessorioDAO.listar(function (error, result) {
  //     res.redirect('/acessorios');
  //   });
  // });
}
