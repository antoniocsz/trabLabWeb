module.exports.items = function (app, req, res) {

  var connection            = app.config.dbConnection();
  var reservaMaterialDAO    = new app.models.ReservaMaterialDAO(connection);

  reservaMaterialDAO.listar(function (error, result) {
    res.render("materiais", { materiais: result });
  });

}

module.exports.novo = function (app, req, res) {

    var material = [{
      id: '',
      cod_material: '',
      quantidade: '',
      tipo_material: '',
      cod_reserva: '',
      qtd_total: '',
    }];

    res.render('material', { material: material });
}


module.exports.deletar = function (app, req, res) {

  var connection            = app.config.dbConnection();
  var reservaMaterialDAO    = new app.models.ReservaMaterialDAO(connection);
  var id                    = req.params.id;

  reservaMaterialDAO.getById(id, function(error, result){
    reservaMaterialDAO.deletar(id, function(error, result){
      res.redirect('/materiais');
    });
  });
}

module.exports.editar = function (app, req, res) {
  var connection            = app.config.dbConnection();
  var reservaMaterialDAO    = new app.models.ReservaMaterialDAO(connection);
  var id                    = req.params.id;  
  
  reservaMaterialDAO.getById(id, function(error, result){
    res.render('material', { material: result });
  });
}


module.exports.salvar = function (app, req, res) {
  var connection            = app.config.dbConnection();
  var reservaMaterialDAO    = new app.models.ReservaMaterialDAO(connection);
  var item                  = req.body;

  reservaMaterialDAO.salvar(item, function (error, result) {
    reservaMaterialDAO.listar(function (error, result) {
      res.redirect('/materiais');
    });
  });
}
