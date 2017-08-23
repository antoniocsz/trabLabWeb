function MilitarDAO(connection) {
  this._connection = connection;
}

MilitarDAO.prototype.listar = function (callback) {
  
  var sql = "select * from Militar order by idmilitar;";

  this._connection.query(sql, callback);
}


MilitarDAO.prototype.salvar = function (militar, callback) {
  if (militar.idmilitar) {
    this._connection.query('update Militar set ? WHERE idmilitar=?;', [militar, militar.idmilitar], callback);
  } else {
    this._connection.query('insert into Militar set ?;', militar, callback);
  }
}

MilitarDAO.prototype.deletar = function (id, callback) {
  this._connection.query('delete from Militar WHERE idmilitar=?;',id, callback);
}

MilitarDAO.prototype.getById = function (id, callback) {
  var sql  = "select * from Militar where idmilitar= " + id + " order by idmilitar;"; 
  
  this._connection.query(sql, callback);
}

module.exports = function () {
  return MilitarDAO;
}
