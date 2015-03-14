Router.configure({
  layoutTemplate: 'applicationLayout'
});

Router.route('/', function () {
  this.render('bodyContent');
});

Router.route('/languages', function(){
  this.render('languageContent');
});

Router.route('/terms', function(){
  this.render('terms');
});

Router.route('/privacy', function(){
  this.render('privacy');
});

Router.route('/pricing', function(){
  this.render('pricing');
});
