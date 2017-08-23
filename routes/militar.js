module.exports = function(app) {
  
  app.get('/militares', function(req, res) {
      app.controller.militar.militares(app, req, res);
  });

  app.get('/novo_militar', function(req, res) {
    app.controller.militar.novo(app, req, res);
  });

  app.post('/salvar_militar', function(req, res) {
    app.controller.militar.salvar(app, req, res);
  });

  app.get('/deletar_militar/:id', function(req, res) {
    app.controller.militar.deletar(app, req, res);
  });

  app.get('/editar_militar/:id', function(req, res) {
    app.controller.militar.editar(app, req, res);
  });

};
