function UserDAO(connection) {
  this._connection = connection;
}

UserDAO.prototype.listar = function (callback) {
  var sql = "select idUsuario as id, login, nomecompleto as nome from Usuario ";
  sql += " order by id;";

  this._connection.query(sql, callback);
}

UserDAO.prototype.salvar = function (usuario, callback) {
  if (usuario.idUsuario) {
    this._connection.query('update Usuario ? WHERE idUsuario=?', [usuario, usuario.idUsuario], callback);
  } else {
    this._connection.query('insert into Usuario set ?', usuario, callback);
  }
}

UserDAO.prototype.deletar = function (id, callback) {
  this._connection.query('delete from Usuario WHERE idUsario = ?',id, callback);
}

UserDAO.prototype.getById = function (id, callback) {
  var sql  = "select idUsuario as id, login, nomecompleto as nome " ;
  sql     += " from Usuario where id = " + id + " order by id;"; 
  
  this._connection.query(sql, callback);
}

module.exports = function () {
  return UserDAO;
}
