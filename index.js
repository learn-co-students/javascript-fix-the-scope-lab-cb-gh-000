var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
// Feel free to move things around!
    const two = 2

  return n + two
}

var funkyFunction = function() {
    return function() {
        return "FUNKY!"
    }


}
// NOTE: you only need to modify the code below this line.
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
var theFunk = funkyFunction()()

