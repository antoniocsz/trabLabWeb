module.exports = function(app) {
  
  app.get('/cautelas', function(req, res) {
      app.controller.reserva.reservas(app, req, res);
  });

};
