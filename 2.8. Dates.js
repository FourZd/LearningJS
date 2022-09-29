let timeNow = new Date();
console.log(timeNow)

let getYear = timeNow.getFullYear(); // get year
let getMonth = timeNow.getMonth(); // get month 
let getDay = timeNow.getDate(); // get day
// ... etc ...

console.log(getYear, getMonth, getDay) // GET YEAR, MONTH, DAY

let setYear = timeNow.setFullYear(2077); // set year
let setMonth = timeNow.setMonth(01); // set month
let setDay = timeNow.setDate(28); // set day
// ... etc ...

console.log(timeNow) // Now its 2077, 01, 28


const d = new Date("October 13, 2014 11:13:00");
console.log(d)