function UserDAO(connection) {
  this._connection = connection;
}

UserDAO.prototype.listar = function (callback) {
  var sql = "select * from Usuario order by idUsuario;";

  this._connection.query(sql, callback);
}

UserDAO.prototype.salvar = function (usuario, callback) {
  if (usuario.idUsuario) {
    console.log(usuario);
    this._connection.query('update Usuario set ? WHERE idUsuario=?;', [usuario, usuario.idUsuario], callback);
  } else {
    this._connection.query('insert into Usuario set ?;', usuario, callback);
  }
}

UserDAO.prototype.deletar = function (id, callback) {
  this._connection.query('delete from Usuario WHERE idUsuario=?;',id, callback);
}

UserDAO.prototype.getById = function (id, callback) {
  var sql  = "select * from Usuario where idUsuario= " + id + " order by idUsuario;"; 
  
  this._connection.query(sql, callback);
}

module.exports = function () {
  return UserDAO;
}
