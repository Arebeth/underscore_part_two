var myFunctions = {

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  extend: function(obj) {
    var hashes = Array.prototype.slice.apply(arguments);
    for (var i = 1; i < hashes.length; i++) {
      var merge = hashes[i];
      for (var key in merge) {
        obj[key] = merge[key];
      }
    }
    return obj;
  },

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  once: function(func) {
    var result;
    var alreadyCalled = false;
    return function() {
      if (!alreadyCalled) {
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
    };
  },

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  delay: function(func, wait) {
    var args = Array.prototype.slice.apply(arguments);
    setTimeout(function () {
      func.apply(this, args.slice(2));
    }, wait);
  },

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // _.memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  // http://addyosmani.com/blog/faster-javascript-memoization/
  memoize: function(func) {

  }

};
module.exports = myFunctions;
