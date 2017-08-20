function AcessorioDAO(connection) {
  this._connection = connection;
}

AcessorioDAO.prototype.listar = function (callback) {
  var sql = "select * from Acessorio;";
  
  this._connection.query(sql, callback);
}


AcessorioDAO.prototype.salvar = function (callback) {
  
}

AcessorioDAO.prototype.deletar = function (callback) {
  
}

AcessorioDAO.prototype.getById = function (callback) {

}

module.exports = function () {
  return AcessorioDAO;
}
