class Human {
    constructor(name, age, job) {
        this.name = name
        this.age = age
        this.job = job;
        this.money = 0;
        this.hands = 2
    }
    
    work() {
        console.log(`${this.name} поработал на ${this.job}`)
        this.money += 999
    }
    
    static evolute() {
        console.log('Hahhahaha', this.hands)
    }
}
    
let human = new Human('Степан', 22, 'Стройка')

while (human.money < 1000000) {
    human.work()
    console.log(human.money)
}

Human.evolute()

//human.evolute() // not gonna work

class childClass extends Human {}

let x = new childClass('Олег', 25, 'Айти')
console.log(x.name)