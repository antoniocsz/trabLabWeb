module.exports = function(app) {
  
  app.get('/acessorios', function(req, res) {
      app.controller.user.usuarios(app, req, res);
  });

};
