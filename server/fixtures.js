function populateCollection(collection, collectionData) {
  collectionData.forEach(function(element) {
    collection.update(element, element, { upsert: true });
  })
};

var languages = [];
var questions = [];

languages = [{name: "JavaScript"}, {name: "jQuery"}];

questions = [{
     text: "Which method creates an &lt;a&gt; HTML element that is used as a hypertext target?",
     correctAnswer: "anchor",
     difficulty: "1",
     isMultipleChoice: false,
     language: "javascript"
  },{
      text: "Which method returns the specified character from a string?",
      possibleAnswers: ["bind", "concat", "charAt", "slice"],
      correctAnswer: "charAt",
      difficulty: "1",
      isMultipleChoice: true,
      language: "javascript"
  },{
      text: "How would you combine two or <br>more strings without using + ?",
      correctAnswer: "concat",
      isMultipleChoice: false,
      difficulty: "1",
      language: "javascript"
  },{
      text: "Which method creates a new array with all elements that pass the test implemented by the provided function?",
      possibleAnswers: ["map", "filter", "for", "join"],
      correctAnswer: "filter",
      isMultipleChoice: true,
      difficulty: "1",
      language: "javascript"
  },{
      text: "How do you return the first index at which a given element can be found in an array, or -1 if it is not present?",
      possibleAnswers: ["indexOf", "index", "charAt", "location"],
      correctAnswer: "indexOf",
      isMultipleChoice: true,
      difficulty: "1",
      language: "javascript"
  },{
      text: "<code>var sampleArray = ['apple', 'banana', 'cherry'];<br>var finalArray = sampleArray[0] + sampleArray[1] + sampleArray[2]; </code> <br><br>What method would accomplish the above?",
      correctAnswer: "join",
      isMultipleChoice: false,
      difficulty: "1",
      language: "javascript"
  },{
      text: "Which method removes the last element from an array and returns that element?",
      possibleAnswers: ["push", "shove", "shift", "pop"],
      correctAnswer: "pop",
      isMultipleChoice: true,
      difficulty: "1",
      language: "javascript"
  },{
      text: "How would you make the first element of an array become the last and the last element of an array become the first?",
      correctAnswer: "reverse",
      isMultipleChoice: false,
      difficulty: "1",
      language: "javascript"
  },{
      text: "Which method extracts a section of a string and returns a new string?",
      possibleAnswers: ["splice", "split", "slice", "shift"],
      correctAnswer: "slice",
      isMultipleChoice: true,
      difficulty: "1",
      language: "javascript"
  },{
      text: "Which method returns a string that might 'LOOK LIKE THIS?'",
      correctAnswer: "toUpperCase",
      isMultipleChoice: false,
      difficulty: "1",
      language: "javascript"
}];

populateCollection(Languages, languages);
populateCollection(Questions, questions);
