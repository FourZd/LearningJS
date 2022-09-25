const objectAttribute = 'favoriteDrink' 
const favoriteDrink = 'Mohito'
const city = 'city'
const itWorker = {
    'age': 22,
    'nativeLanguage': 'Russian',
    'programmingLanguage': 'Python',
    'city': 'Sochi',
    'hobby': ['blockchains', 'music'], // list as value
    [objectAttribute]: favoriteDrink, // variable as key & value. Must use [] for key

    findJob() {
        this.job = 'McDonalds worker';
    },

    quitJob: function() {
        this.job = null;
    } 
    
}

itWorker.findJob();
console.log(itWorker.job);
itWorker.quitJob();
console.log(itWorker.job)
console.log(itWorker.city);
console.log(itWorker[city]); // you can use var with a name of key

console.log(itWorker.favoriteDrink)


let user = { name: 'John' };
let admin = user;
admin.name = 'Pete';

console.log(user.name) // Same object, different "links"

user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  console.log(user.sizes.height) // object.object.attr

/*
Different objects cant be equal
*/ 
let a = {};
const b = {};
console.log(a == b)

c = Object.assign(a, itWorker) // good way to copy the object
console.log(c)
