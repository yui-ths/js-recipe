const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (number % 3 === 0) {
      console.log(number + "!!!!!!!")
    } else {
      console.log(number)
    }
  }
}

genkiFunction(24)
