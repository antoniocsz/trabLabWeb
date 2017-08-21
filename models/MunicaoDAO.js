function MunicaoDAO(connection) {
  this._connection = connection;
}

MunicaoDAO.prototype.listar = function (callback) {
  var sql = "select * from Municao order by idmunicao;";

  this._connection.query(sql, callback);
}


MunicaoDAO.prototype.salvar = function (municao, callback) {
  if (municao.id) {
    this._connection.query('update Municao set ? WHERE idmunicao= ?', [municao, municao.idmunicao], callback);
  } else {
    this._connection.query('insert into Municao set ?', municao, callback);
  }
}

MunicaoDAO.prototype.deletar = function (id, callback) {
  this._connection.query('delete from Municao WHERE idmunicao= ?',id, callback);
}

MunicaoDAO.prototype.getById = function (id, callback) {
  var sql  = "select * from  Municao where idmunicao= " + id + " order by idmunicao;"; 
  
  this._connection.query(sql, callback);
}

module.exports = function () {
  return MunicaoDAO;
}
