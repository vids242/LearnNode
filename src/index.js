const rect = require("./rectangel")

//1
// rect.area(20,10)
// console.log("Area Of Perimiters : ",rect.perimeter(10,20))

const solveRect = (l, w) => {
    if (l <= 0 || w <= 0) {
        console.log(new Error("Your area length end with must be grater then zero"));
    } else {
        rect.area(20,10)
        console.log("Area Of Perimiters : ",rect.perimeter(10,20))
    }
}
solveRect(10, 20)