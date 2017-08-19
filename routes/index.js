module.exports = function(app){
	
	app.get('/index', function(req, res){
		app.controller.index.index(app, req, res);
	});

}
