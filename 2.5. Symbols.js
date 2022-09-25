let id1 = Symbol('description');
let id2 = Symbol('description');

console.log(id1 == id2) // Symbols are unique

let id = Symbol('id');

const user = {
    [id]: 1,
    name: 'Alexander',
    job: 'Pilot',    
}

console.log(user[id])


let idGlobal = Symbol.for("Name"); // No global ID, creating it
let idAgain = Symbol.for("Name"); // Already have ID, taking it

console.log( idGlobal === idAgain ); //

console.log( Symbol.for("Name") )// return symbol
console.log( Symbol.keyFor(idGlobal) ) // return name