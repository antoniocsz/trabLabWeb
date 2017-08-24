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


ReservaDAO.prototype.salvar = function (reserva, callback) {
  if (reserva.idreserva) {
    this._connection.query('update Reserva set ? where idreserva=?;', [reserva, reserva.idreserva], callback);
  } else {
    this._connection.query('insert into Reserva set ?;', reserva, callback);
  }
}

ReservaDAO.prototype.deletar = function (id, callback) {
  this._connection.query('delete from Reserva WHERE idreserva= ?;', id, callback);
}

ReservaDAO.prototype.getById = function (id, callback) {
  var sql =  '';
  this._connection.query(sql, callback);
}

module.exports = function () {
  return ReservaDAO;
}
