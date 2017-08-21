module.exports = function(app) {
  
  app.get('/municoes', function(req, res) {
    app.controller.municao.municoes(app, req, res);
  });

  app.get('/novo_municao', function(req, res) {
    app.controller.municao.novo(app, req, res);
  });

  app.post('/salvar_municao', function(req, res) {
    app.controller.municao.salvar(app, req, res);
  });

  app.get('/deletar_municao/:id', function(req, res) {
    app.controller.municao.deletar(app, req, res);
  });

  app.get('/editar_municao/:id', function(req, res) {
    app.controller.municao.editar(app, req, res);
  });

};
