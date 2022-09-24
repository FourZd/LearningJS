let counter = 0
mainWhile: while (counter < 100) {
    counter++;
    console.log(counter);
    while (true) {
        if (counter == 50) {
            break mainWhile;
        }
        break;
    }
    
}

counter = 0;
for (; counter < 11; counter += 3) {
    console.log(counter);
}
