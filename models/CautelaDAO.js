function CautelaDAO(connection) {
  this._connection = connection;
}

CautelaDAO.prototype.listar = function (callback) {
  var sql = "select * from Cautela;";
  
  this._connection.query(sql, callback);
}


CautelaDAO.prototype.salvar = function (callback) {
  
}

CautelaDAO.prototype.deletar = function (callback) {
  
}

CautelaDAO.prototype.getById = function (callback) {

}

module.exports = function () {
  return CautelaDAO;
}
