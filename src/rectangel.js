const area = (l,w) => {
    let ans = l * w
    console.log("Area Of Ractangel is :",ans);
}

const perimeter = (l,w) => {
     let ans = 2 * (l+w)
     return ans 
}

module.exports = {
    area,
    perimeter
}