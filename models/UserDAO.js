function UserDAO(connection) {
  this._connection = connection;
}

UserDAO.prototype.listar = function (callback) {
  var sql = "select idUsuario as id, login, nomecompleto as nome from Usuario ";
  sql += " order by id;";

  this._connection.query(sql, callback);
}

UserDAO.prototype.salvar = function (usuario, callback) {
  /*
  if (usuario.id) {
    this._connection.query('update usuario ? WHERE id = ?', [usuario, usuario.id], callback);
  } else {
    this._connection.query('insert into usuario set ?', usuario, callback);

  }
  */
}

UserDAO.prototype.deletar = function (callback) {
  // this._connection.query('delete from apontamento WHERE id = ?',id, callback);
}

UserDAO.prototype.getById = function (callback) {
  // var sql = "select ap.id as id, DATE_FORMAT(ap.hora,'%T') as hora, DATE_FORMAT(ap.hora,'%d %b %Y') as data, pon.nome as ponto, rot.nome as roteiro";
  // sql   += " from apontamento ap INNER JOIN ponto pon on pon.id = ap.id_ponto" ;
  // sql   += " INNER JOIN roteiros rot on rot.id = ap.id_roteiro"; 
  // sql   += " where ap.id = " + id + " " ; 
  // sql   += " ORDER BY ap.hora desc;";
  
  // this._connection.query(sql, callback);
}

module.exports = function () {
  return UserDAO;
}
