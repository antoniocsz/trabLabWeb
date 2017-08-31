module.exports.validar = function(app, req, res){
    var connection  = app.config.dbConnection();
    res.render("login");
}

module.exports.fazer_login = function(app, req, res){
    res.redirect("/");
}
