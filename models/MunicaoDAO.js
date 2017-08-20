function MunicaoDAO(connection) {
  this._connection = connection;
}

MunicaoDAO.prototype.listar = function (callback) {
  var sql = "select sigla, data, quantidade, nomeguerra, posto from ManterCautela as m ";
  sql += " INNER JOIN Reserva_material as r on m.reserva_id = r.id ";
  sql += " INNER JOIN Reserva as res on res.idreserva = r.cod_reserva "
  sql += " INNER JOIN Militar as mil on mil.idmilitar = m.militar_id order by data; ";

  this._connection.query(sql, callback);
}


MunicaoDAO.prototype.salvar = function (callback) {
  
}

MunicaoDAO.prototype.deletar = function (callback) {
  
}

MunicaoDAO.prototype.getById = function (callback) {

}

module.exports = function () {
  return MunicaoDAO;
}
