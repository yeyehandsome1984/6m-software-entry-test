/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    if (typeof x !== 'number' || isNaN(x) || typeof y !== 'number' || isNaN(y)) {
        console.log('x and y must be numeric.');
        return -1;
      }  else {
        let temp=x;
        x=y;
        y=temp;


        console.log('Swapped values:');
        console.log('x:', x);
        console.log('y:', y);
      }

    // Task 1: Add code here
}

swap (20,10)

// Task 2: Add code here

module.exports = swap;
