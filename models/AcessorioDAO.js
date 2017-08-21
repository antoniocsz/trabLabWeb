function AcessorioDAO(connection) {
  this._connection = connection;
}

AcessorioDAO.prototype.listar = function (callback) {
  var sql = "select * from Acessorio order by idacessorio;";
  
  this._connection.query(sql, callback);
}


AcessorioDAO.prototype.salvar = function (acessorio, callback) {
  if (acessorio.id) {
    this._connection.query('update Acessorio set ? WHERE idacessorio= ?', [acessorio, acessorio.id], callback);
  } else {
    this._connection.query('insert into Acessorio set ?', acessorio, callback);
  }
}

AcessorioDAO.prototype.deletar = function (id, callback) {
  this._connection.query('delete from Acessorio WHERE idacessorio= ?',id, callback);
}

AcessorioDAO.prototype.getById = function (id, callback) {
  var sql  = "select * from  Acessorio where idacessorio= " + id + " order by idacessorio;"; 
  
  this._connection.query(sql, callback);
}

module.exports = function () {
  return AcessorioDAO;
}
