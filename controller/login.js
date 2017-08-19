module.exports.validar = function(app, req, res){
	var connection 	= app.config.dbConnection();
	var loginDAO = new app.models.loginDAO(connection);
    var login	= req.params.login;  
    var senha = req.params.senha;

    loginDAO.validar(login, senha, function (error, result) {
		console.log(login);
		loginDAO.listar(function (error, result) {
            console.log(login);
            res.render("login", { login: result});
    	});
    });	
}
