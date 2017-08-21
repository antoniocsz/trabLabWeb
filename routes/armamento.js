module.exports = function(app) {
  
  app.get('/armamentos', function(req, res) {
    app.controller.armamento.armamentos(app, req, res);
  });

  app.get('/novo_armamento', function(req, res) {
    app.controller.armamento.novo(app, req, res);
  });

  app.post('/salvar_armamento', function(req, res) {
    app.controller.armamento.salvar(app, req, res);
  });

  app.get('/deletar_armamento/:id', function(req, res) {
    app.controller.armamento.deletar(app, req, res);
  });

  app.get('/editar_armamento/:id', function(req, res) {
    app.controller.armamento.editar(app, req, res);
  });

};
