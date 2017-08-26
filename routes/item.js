module.exports = function(app) {
  
  app.get('/itens', function(req, res) {
      app.controller.item.items(app, req, res);
  });

  app.get('/nova_item', function(req, res) {
      app.controller.item.novo(app, req, res);
  });

  app.post('/salvar_item', function(req, res) {
      app.controller.item.salvar(app, req, res);
  });

  app.get('/deletar_item/:id', function(req, res) {
      app.controller.item.deletar(app, req, res);
  });

  app.get('/editar_item/:id', function(req, res) {
      app.controller.item.editar(app, req, res);
  });
    
};
