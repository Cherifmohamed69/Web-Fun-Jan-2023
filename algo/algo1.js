function reverse(arr) {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }

  var myArray = ["a", "b", "c", "d", "e"];
var reversedArray = reverse(myArray);
console.log(reversedArray); 
