module.exports.materiais = function (app, req, res) {

  var connection            = app.config.dbConnection();
  var reservaMaterialDAO    = new app.models.ReservaMaterialDAO(connection);

  reservaMaterialDAO.listar(function (error, result) {
    res.render("materiais", { materiais: result });
  });

}

module.exports.novo = function (app, req, res) {
    
    var connection            = app.config.dbConnection();
    var armamentoDAO          = new app.models.ArmamentoDAO(connection);
    var municaoDAO            = new app.models.MunicaoDAO(connection);
    var acessorioDAO          = new app.models.AcessorioDAO(connection);
    var reservaoDAO           = new app.models.ReservaDAO(connection);

    var material = [{
      id: '',
      cod_material: '',
      quantidade: '',
      tipo_material: '',
      cod_reserva: '',
      qtd_total: '',
    }];
    
    reservaoDAO.listar(function (error, result) {
      var reservas = result;
      armamentoDAO.listar( function(error, result) {
        var armamentos = result;
        municaoDAO.listar( function (error, result){
          var municoes = result;
          acessorioDAO.listar(function (error, result) {
            var valores = [result, municoes, armamentos]; 

            res.render('material', { 
              reservas: reservas, 
              material: material, 
              valores: valores 
            });    
          });
        });
      });
    });
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

      
  console.log(item);

  reservaMaterialDAO.salvar(item, function (error, result) {
    res.redirect('/materiais');
  });
}
