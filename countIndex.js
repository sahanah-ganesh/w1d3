function countIndex (string) {
  var newString = string.split(" ").join("").toLowerCase();

  var count = {};

  for (var i = 0; i < newString.length; i++) {

    var currentLetter = newString.charAt(i);

    if (currentLetter in count) {
      count[currentLetter] = count[currentLetter] + ", " + i.toString();
    } else {
      count[currentLetter] = i.toString();
    }
  }
  console.log(count);
}

console.log(countIndex("lighthouse in the house"));