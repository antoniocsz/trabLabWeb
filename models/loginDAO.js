function loginDAO(connection){
	this._connection = connection;
}

loginDAO.prototype.validar = function(login, senha, callback){
	var sql = "select Usuario.login as login, Usuario.senha as senha from Usuario ";
  	sql += "WHERE login='"+ login +"';";

	this._connection.query(sql, callback);
}

module.exports= function(){

	return loginDAO;
}
