Template.languageContent.helpers({
  languages: function() {
    return Languages.find({});
  },

  upcomingLanguages: function() {
    var data = [{name: "Underscore"}, {name: "Ruby"}, {name: "Rails"}]
    return data;
  }
});
