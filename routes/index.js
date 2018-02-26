let express = require('express');
let userDao = require('../dao/userdao');
let articleDao = require('../dao/articledao');


module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  app.get('/login.html', function(req, res){
    res.render('login');
  });

  app.get('/write.html', function(req, res){
    if(req.session.user){
     
      return res.render('write',{data: result});
      
    }
    return res.redirect('login.html');
  });

  app.get('/article.html',  function(req, res){
    articleDao.getSpecifyCol({author: 0, category: 0, content: 0}, function(result){
      console.log(result);
      return res.render('article',{data: result});
    });
  });

  app.get('/admin.html',  function(req, res){
    userDao.getAllUsers(function(result){
      res.render('admin', {data: result});
    });
  });

  app.get('/chat.html', function(req, res){
    res.render('chat');
  });
}
