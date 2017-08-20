function MilitarDAO(connection) {
  this._connection = connection;
}

MilitarDAO.prototype.listar = function (callback) {
  
  var sql = "select  * from Militar;";

  this._connection.query(sql, callback);
}


MilitarDAO.prototype.salvar = function (callback) {
  
}

MilitarDAO.prototype.deletar = function (callback) {
  
}

MilitarDAO.prototype.getById = function (callback) {

}

module.exports = function () {
  return MilitarDAO;
}
