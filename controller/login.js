module.exports.validar = function(app, req, res){
	var connection 	= app.config.dbConnection();
	var loginDAO = new app.models.loginDAO(connection);
    var login	= req.params.login.substring(0, 15);  
    var senha = req.params.senha.substring(0, 15);

    loginDAO.validar(login, senha, function (error, result) {
		console.log(login);
		loginDAO.listar(function (error, result) {
            if (error)
                res.render("login", { login: result});
    	});
    });	
}
