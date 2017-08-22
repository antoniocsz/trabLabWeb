module.exports = function(app) {
  
  app.get('/usuarios', function(req, res) {
      app.controller.user.usuarios(app, req, res);
  });

  app.get('/novo_usuario', function(req, res) {
      app.controller.user.novo(app, req, res);
  });

  app.post('/salvar_usuario', function(req, res) {
      app.controller.user.salvar(app, req, res);
  });

  app.get('/deletar_usuario/:id', function(req, res) {
      app.controller.user.deletar(app, req, res);
  });

  app.get('/editar_usuario/:id', function(req, res) {
      app.controller.user.editar(app, req, res);
  });

};
