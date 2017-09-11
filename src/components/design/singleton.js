//Singleton are really bad, I mean, not really needed in JavaScript.
//That being said, you can find plenty of arguments on the topic often embellished with nice Java snippets.
//see more alternatives https://medium.com/@dmnsgn/singleton-pattern-in-es6-d2d021d150ae

var counterModule = (function () {

  var instance,
      counter = 0;

  var getCounter = function () {
    return counter;
  }

  var increaseCounter = function () {
    counter ++;
  }

  var createInstance = function () {
    return {
      getCounter: getCounter,
      increaseCounter: increaseCounter
    }
  }

  return {
    getInstance: function () {
      return instance || (instance = createInstance());
    }
  }

})();

export default counterModule;
