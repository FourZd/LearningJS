class Human {
    constructor(name, age, job) {
        this.name = name
        this.age = age
        this.job = job;
    }
    
    work() {
        console.log(`${this.name} поработал на ${this.job}`)
    }
}

let human = new Human('Степан', 22, 'Стройка')
human.work()