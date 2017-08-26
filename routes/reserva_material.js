module.exports = function(app) {
  
  app.get('/materiais', function(req, res) {
      app.controller.reserva_material.items(app, req, res);
  });

  app.get('/novo_material', function(req, res) {
      app.controller.reserva_material.novo(app, req, res);
  });

  app.post('/salvar_material', function(req, res) {
      app.controller.reserva_material.salvar(app, req, res);
  });

  app.get('/deletar_material/:id', function(req, res) {
      app.controller.reserva_material.deletar(app, req, res);
  });

  app.get('/editar_material/:id', function(req, res) {
      app.controller.reserva_material.editar(app, req, res);
  });
    
};
