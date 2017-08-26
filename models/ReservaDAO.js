function ReservaDAO(connection) {
  this._connection = connection;
}

ReservaDAO.prototype.listar = function (callback) {
  var sql = "select * from Reserva;";
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
  var sql =  'select * from Reserva where idreserva=' + id + " order by idreserva;";
  this._connection.query(sql, callback);
}

module.exports = function () {
  return ReservaDAO;
}
