module.exports = function(app) {
  
  app.get('/users', function(req, res) {
      app.controller.user.usuarios(app, req, res);
  });

};
