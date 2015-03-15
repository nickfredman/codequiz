function populateCollection(collection, collectionData) {
  collectionData.forEach(function(element) {
    collection.update(element, element, { upsert: true });
  })
};

var languages = [];
var questions = [];

languages = [{name: "JavaScript"}, {name: "jQuery"}];

questions = [{
     // what about showing an example? (symbol, e.g. - example: <a href="#"/>)
     text: "Which method creates an &lt;a&gt; HTML element that is used as a hypertext target?",
     answer: "anchor",
     type: "fitb", // what does this connote? what are fitb/mc?
     difficulty: "easy",
     language: "javascript"
  },{
      text: "Which method returns the specified character from a string?",
      possibleAnswers: "bind,concat,charAt,slice",
      answer: "charAt",
      type: "mc",
      difficulty: "easy",
      language: "javascript"
  },{
      text: "How would you combine two or <br>more strings without using + ?",
      answer: "concat",
      type: "fitb",
      difficulty: "easy",
      language: "javascript"
  },{
      text: "Which method creates a new array with all elements that pass the test implemented by the provided function?",
      possibleAnswers: "map,filter,for,join",
      answer: "filter",
      type: "mc",
      difficulty: "easy",
      language: "javascript"
  },{
      text: "How do you return the first index at which a given element can be found in an array, or -1 if it is not present?",
      possibleAnswers: "indexOf,index,charAt,location",
      answer: "indexOf",
      type: "mc",
      difficulty: "easy",
      language: "javascript"
  },{
      text: "<code>var sampleArray = ['apple', 'banana', 'cherry'];\nvar finalArray = sampleArray[0] + sampleArray[1] + sampleArray[2]; </code> <br><br>What method would better accomplish the above?",
      answer: "join",
      type: "fitb",
      difficulty: "easy",
      language: "javascript"
  },{
      text: "Which method removes the last element from an array and returns that element?",
      possibleAnswers: "push,shove,shift,pop",
      answer: "pop",
      type: "mc",
      difficulty: "easy",
      language: "javascript"
  },{
      text: "How would you make the first element of an array become the last and the last element of an array become the first?",
      answer: "reverse",
      type: "fitb",
      difficulty: "easy",
      language: "javascript"
  },{
      text: "Which method extracts a section of a string and returns a new string?",
      possibleAnswers: "splice,split,slice,shift",
      answer: "slice",
      type: "mc",
      difficulty: "easy",
      language: "javascript"
  },{
      text: "Which method returns a string that might 'LOOK LIKE THIS?'",
      answer: "toUpperCase",
      type: "fitb",
      difficulty: "easy",
      language: "javascript"
}];

populateCollection(Languages, languages);
populateCollection(Questions, questions);
