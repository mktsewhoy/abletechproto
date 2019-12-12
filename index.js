// The easy way:
for (c = 1; c < 101; c++) {
    if (c % 15 == 0) {
        console.log("FizzBuzz")
    } else if (c % 3 == 0) {
        console.log("Fizz")
    } else if (c % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(c)
    }
}

// The refactored way:
for (c = 0; c < 100;) {
    console.log((++c % 3 ? '':'fizz')+(c % 5 ?'':'buzz') || c)
}