module.exports = function(app) {
  
  app.get('/municoes', function(req, res) {
      app.controller.reserva.reservas(app, req, res);
  });

};
