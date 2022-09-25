function Worker(name, age, job) {
    this.name = name,
    this.age = age, 
    this.job = job;
}

let worker = new Worker("Stepan", 22, "C++ developer");

for (key in worker) {
    console.log(key, '-', worker[key])
}