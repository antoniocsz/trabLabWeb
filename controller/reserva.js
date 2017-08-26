module.exports.reservas = function (app, req, res) {

  var connection = app.config.dbConnection();
  var reservaDAO = new app.models.ReservaDAO(connection);

  reservaDAO.listar(function (error, result) {
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
  var reservaDAO    = new app.models.ReservaDAO(connection);
  var id            = req.params.id;

  reservaDAO.getById(id, function(error, result){
    reservaDAO.deletar(id, function(error, result){
      res.redirect('/reservas');
    });
  });
}

module.exports.editar = function (app, req, res) {
  var connection    = app.config.dbConnection();
  var reservaDAO    = new app.models.ReservaDAO(connection);
  var id            = req.params.id;  
  
  reservaDAO.getById(id, function(error, result){
    res.render('reserva', { reserva: reserva });
  });
}


module.exports.salvar = function (app, req, res) {
  var connection = app.config.dbConnection();
  var reservaDAO    = new app.models.ReservaDAO(connection);
  var reserva = req.body;

  reservaDAO.salvar(reserva, function (error, result) {
    reservaDAO.listar(function (error, result) {
      res.redirect('/reservas');
    });
  });
}
