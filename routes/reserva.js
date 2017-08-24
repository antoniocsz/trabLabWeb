module.exports = function(app) {
  
  app.get('/reservas', function(req, res) {
      app.controller.reserva.reservas(app, req, res);
  });

  app.get('/nova_reserva', function(req, res) {
      app.controller.reserva.novo(app, req, res);
  });

  app.post('/salvar_reserva', function(req, res) {
      app.controller.reserva.salvar(app, req, res);
  });

  app.get('/deletar_reverva/:id', function(req, res) {
      app.controller.reserva.deletar(app, req, res);
  });

  app.get('/editar_reverva/:id', function(req, res) {
      app.controller.reserva.editar(app, req, res);
  });
    
};
