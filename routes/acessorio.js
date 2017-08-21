module.exports = function(app) {
  
  app.get('/acessorios', function(req, res) {
    app.controller.acessorio.acessorios(app, req, res);
  });

  app.get('/novo_acessorio', function(req, res) {
    app.controller.acessorio.novo(app, req, res);
  });

  app.post('/salvar_acessorio', function(req, res) {
    app.controller.acessorio.salvar(app, req, res);
  });

  app.get('/deletar_acessorio/:id', function(req, res) {
    app.controller.acessorio.deletar(app, req, res);
  });

  app.get('/editar_acessorio/:id', function(req, res) {
    app.controller.acessorio.editar(app, req, res);
  });

};
