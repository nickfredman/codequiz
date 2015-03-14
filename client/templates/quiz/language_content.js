Template.languageContent.helpers({
  languages: function() {
    console.log(Languages.find({}));
    return Languages.find({});
  }
});