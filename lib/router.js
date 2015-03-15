Router.configure({
  layoutTemplate: 'applicationLayout'
});

Router.route('/', function () {
  this.render('bodyContent');
});

Router.route('/languages', function(){
  this.render('languages');
});

Router.route('/pricing', function(){
  this.render('pricing');
});

Router.route('/privacy', function(){
  this.render('privacy');
});

Router.route('/terms', function(){
  this.render('terms');
});

Router.route('/quiz', function(){
  this.render('quiz');
});