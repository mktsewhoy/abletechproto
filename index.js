for (c = 1; c < 101; c++) {
    if (c % 15 == 0) {
        document.write("FizzBuzz");
    } else if (c % 3 == 0) {
        document.write("Fizz");
    } else if (c % 5 == 0) {
        document.write("Buzz");
    } else {
        document.write(c);
    }
    document.write("<br>")
}