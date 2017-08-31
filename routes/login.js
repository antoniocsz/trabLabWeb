module.exports = function(app) {
  
  app.get('/login', function(req, res) {
      app.controller.login.validar(app, req, res);
      // res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/fazer_login', function(req, res) {
      app.controller.login.fazer_login(app, req, res);
      // res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/login', function(req, res) {
      app.controller.login.validar(app, req, res);
      // res.render('login.ejs', { message: req.flash('loginMessage') });
  });

};

/*
exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if([0].password == password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
  });
}
*/
