const fizzBuzz = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("fizzBuzz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else if (n % 3 === 0) {
      console.log("fizz")
    } else {
      console.log(n)
    }
  }
}
