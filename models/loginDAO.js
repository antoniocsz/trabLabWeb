function loginDAO(connection){
	this._connection = connection;
}

loginDAO.prototype.validar = function(login, senha, callback){
	var sql = "SELECT login, senha from Usuario ";
  sql += `WHERE login='${login}' senha='${senha}'`;

	this._connection.query(sql, callback);
}

module.exports= function(){

	return loginDAO;
}
