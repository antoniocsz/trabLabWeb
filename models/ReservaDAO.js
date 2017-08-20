function ReservaDAO(connection) {
  this._connection = connection;
}

ReservaDAO.prototype.listar = function (callback) {
  var sql = "select sigla, data, quantidade, nomeguerra, posto from ManterCautela as m ";
  sql += " INNER JOIN Reserva_material as r on m.reserva_id = r.id ";
  sql += " INNER JOIN Reserva as res on res.idreserva = r.cod_reserva "
  sql += " INNER JOIN Militar as mil on mil.idmilitar = m.militar_id order by data; ";

  this._connection.query(sql, callback);
}


ReservaDAO.prototype.salvar = function (callback) {
  
}

ReservaDAO.prototype.deletar = function (callback) {
  
}

ReservaDAO.prototype.getById = function (callback) {

}

module.exports = function () {
  return ReservaDAO;
}
