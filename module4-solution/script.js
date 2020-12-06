var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
(function(window){
  for (name in names) {
    /* console.log(names[name].charAt(0)) */
    if (names[name].charAt(0) === "J") {
      byeSpeaker.speak(names[name]);
    } else {
        helloSpeaker.speak(names[name]);
    }
  }
  
}(window));