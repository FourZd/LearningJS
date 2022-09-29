let someMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
])

someMap.set('key3', 'value3')
console.log(someMap.get('key3'))

for (let i of someMap.entries()) {
    console.log(i)
}