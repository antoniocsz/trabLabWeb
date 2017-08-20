module.exports.reservas = function (app, req, res) {

  var connection = app.config.dbConnection();
  var reservaDAO = new app.models.ReservaDAO(connection);

  reservaDAO.listar(function (error, result) {
    console.log(result);
    res.render("reserva", { reservas: result });
  });

}
