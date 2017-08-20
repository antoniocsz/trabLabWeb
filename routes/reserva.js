module.exports = function(app) {
  
  app.get('/reservas', function(req, res) {
      app.controller.reserva.reservas(app, req, res);
  });

};
