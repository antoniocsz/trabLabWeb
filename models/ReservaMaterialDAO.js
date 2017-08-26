function ReservaMaterialDAO(connection) {
  this._connection = connection;
}

ReservaMaterialDAO.prototype.listar = function (callback) {
  var sql = "select r.sigla as sigla, a.modelo as material, 'Armamento' as tipo, rm.quantidade as qtd ";
  sql += " from Reserva_material as rm ";
  sql += " inner join Reserva as r on r.idreserva = rm.cod_reserva ";
  sql +=  " inner join Armamento as a on a.id = rm.cod_material ";
  sql +=  " where rm.tipo_material = 1 ";
  sql +=  " union all ";
  sql +=  " select r.sigla as sigla, a.descricao as material, 'Acessorio' as tipo, rm.quantidade as qtd ";
  sql +=  " from Reserva_material as rm ";
  sql +=  " inner join Reserva as r on r.idreserva = rm.cod_reserva ";
  sql +=  " inner join Acessorio as a on a.idacessorio = rm.cod_material ";
  sql +=   " where rm.tipo_material = 2 ";
  sql +=  " union all ";
  sql +=   " select r.sigla as sigla, m.descricao as material, 'Municao' as tipo, rm.quantidade as qtd ";
  sql +=   " from Reserva_material as rm ";
  sql +=  " inner join Reserva as r on r.idreserva = rm.cod_reserva ";
  sql +=  " inner join Municao as m on m.idmunicao = rm.cod_material ";
  sql +=  " where rm.tipo_material = 3; ";

  this._connection.query(sql, callback);
}


ReservaMaterialDAO.prototype.salvar = function (reserva, callback) {
  if (reserva.id) {
    this._connection.query('update Reserva_material set ? where id=?;', [reserva, reserva.id], callback);
  } else {
    this._connection.query('insert into Reserva_material set ?;', reserva, callback);
  }
}

ReservaMaterialDAO.prototype.deletar = function (id, callback) {
  this._connection.query('delete from Reserva_material WHERE idreserva= ?;', id, callback);
}

ReservaMaterialDAO.prototype.getById = function (id, callback) {
  var sql =  'select * from Reserva_material where id=' + id + " order by id;";
  this._connection.query(sql, callback);
}

module.exports = function () {
  return ReservaMaterialDAO;
}
