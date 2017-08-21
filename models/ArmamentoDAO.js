function ArmamentoDAO(connection) {
  this._connection = connection;
}

ArmamentoDAO.prototype.listar = function (callback) {
  var sql = "select numeroserie as serie, modelo, fabricante, id ";
  sql += " from Armamento  order by id; ";
  
  this._connection.query(sql, callback);
}


ArmamentoDAO.prototype.salvar = function (armamento, callback) {
  if (armamento.id) {
    this._connection.query('update Armamento set ? WHERE id=?', [armamento, armamento.id], callback);
  } else {
    this._connection.query('insert into Armamento set ?', armamento, callback);
  }
}

ArmamentoDAO.prototype.deletar = function (id, callback) {
  this._connection.query('delete from Armamento WHERE id= ?',id, callback);
}

ArmamentoDAO.prototype.getById = function (id, callback) {
  var sql  = "select id, numeroserie, fabricante, modelo " ;
  sql     += " from Armamento where id = " + id + " order by id;"; 
  
  this._connection.query(sql, callback);
}

module.exports = function () {
  return ArmamentoDAO;
}
