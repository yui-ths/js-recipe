const fizzBuzz = function (number) {
  for (let n = 1; n<= number; n++){
    if (number % 3 === 0) {
    console.log("fizz")
  } else if (number % 5 === 0) {
    console.log("Buzz")
  } else if (number % 15 === 0) {
    console.log("fizzBuzz")
  } else {
    console.log(number)
  }
}

fizzBuzz(100)