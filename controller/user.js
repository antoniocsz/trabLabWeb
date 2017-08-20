module.exports.usuarios = function (app, req, res) {

  var connection = app.config.dbConnection();
  var userDAO = new app.models.UserDAO(connection);

  userDAO.listar(function (error, result) {
    console.log(result);
    res.render("user", { usuarios: result });
  });

}
