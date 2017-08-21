module.exports = function(app) {
  
  app.get('/militares', function(req, res) {
      app.controller.reserva.reservas(app, req, res);
  });

};
