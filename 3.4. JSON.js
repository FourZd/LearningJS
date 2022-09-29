const someObject = {
    someAttr: 1,
    anotherAttr: 'White',
    thirdAttr: true,
    lastAttr: {
        insertedAttr: 'Black'
    }
}


a = JSON.stringify(someObject) // Object to JSON
console.log(a)

anotherObject = JSON.parse(a) // JSON to object
console.log(anotherObject)

console.log(someObject === anotherObject) // Not the same object, but its copy