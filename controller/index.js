module.exports.index= function(app, req, res){
	var connection = app.config.dbConnection();
 	res.render("login");	
}
