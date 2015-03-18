Template.languageCard.events({
  "click .level-button": function(e){
    e.preventDefault();
    selectQuizButton = e.currentTarget;
    languageAndLevel = $(selectQuizButton).val().split(' ');
    Session.set("language", languageAndLevel[0]);
    Session.set("level", languageAndLevel[1]);
    console.log(Session.get("language"));
    Router.go("/quiz")
  }
});