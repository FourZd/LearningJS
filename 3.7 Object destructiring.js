const objectName = {
    name: 'poodge',
    level: 25
}

let { name, level } = objectName
console.log(name, level)


const arr = ['Python', 'JS', 'Solidity']

let [ Elem1, Elem2, Elem3 ] = arr
console.log(Elem1, Elem2, Elem3)

const func = ({name, level}) => {
    return name + level
}

console.log(func(objectName))