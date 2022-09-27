// QUEUE // First in First out //
function magnitQueue() {
    queue = [];
    counter = 0;
    while (counter < 20) {
        console.log(queue) 
        queue.push(`object ${counter}`);
        counter++;
        if (queue.length >= 5) {
            queue.shift();
        }
    }
}
// QUEUE // First in First out //
magnitQueue()




// STACK // Last in First out //
function magnitStack() {
    stack = [];
    counter = 0;
    while (counter < 20) {
        stack.push(`object ${counter}`); // LAST IN
        console.log(stack)
        counter++;
        if (stack.length >= 5) {
            stack.pop(); // FIRST OUT
        }
    }
}
// STACK // Last in First out //
magnitStack()

for (let i=0; i<stack.length; i++) {
    console.log('element', i)
} // best way to iterate array
