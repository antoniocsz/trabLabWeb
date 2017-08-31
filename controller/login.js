module.exports.validar = function(app, req, res){
	var connection 	= app.config.dbConnection();
	//var loginDAO = new app.models.loginDAO(connection);
    res.render("login");

    /*loginDAO.validar(login, senha, function (error, result) {
		console.log(login);
		loginDAO.listar(function (error, result) {
            if (error)
                res.render("login", { login: result});
    	});
    });	*/
}

module.exports.fazer_login = function(app, req, res){
    //var connection  = app.config.dbConnection();
    //var loginDAO = new app.models.loginDAO(connection);

    res.redirect("/");


    /*loginDAO.validar(login, senha, function (error, result) {
        console.log(login);
        loginDAO.listar(function (error, result) {
            if (error)
                res.render("login", { login: result});
        });
    });*/
}
