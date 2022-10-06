someArr = [1, 4, 9, 121];

for (item in someArr) {
    console.log(item)
} // 0, 1, 2, 3

for (item of someArr) {
    console.log(item)
} // 1, 4, 9, 121

someObj = {
    a: 123,
    b: 234,
    c: 345
}

for (item in someObj) {
    console.log(item)
} // a, b, c

for (item of someObj.keys()) {
    console.log(item)
} // Not gonna work