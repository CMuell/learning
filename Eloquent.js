// Import stylesheets
import './style.css';

// Backticks `` allow embedded operations using ${}
console.log(`half of 100 is ${100 / 2}`);

const testNumber = 20;
console.log(`The number is: ${testNumber}`);

// Comparison operations will return a `true` or `false` value.
console.log(3 > 2); // true
console.log(2 > 3); // false

// Lowercase characters have a higher value.
console.log(`apple` > `Apple`);

if (1 + 1 == 2 && 10 * 10 > 50) {
  console.log(true);
}

// ternary operator => (boolean ? true : false)
const eq = 5 < 3;
console.log(eq ? `this is ${true}` : `this is ${false}`);
/*
  OR operator: ||
  returns left value if statement converted to `true`
  returns right value if statement converted to `false`

  for (binding definition ; condition ; binding update / increment)
  example: for (number = 0; number <= 12; number += 1)
*/

// switch statement
switch (prompt('Choose 1, 2, or 3')) {
  case 1: // case label
    console.log(1);
    break; // important. If `break` is absent, the program will continue until the next break, regardless of label.
  case 2:
    console.log(2);
  case 3:
    console.log(3);
    console.log('forgot to add a break!');
    break;
  default:
    console.log(`Please enter 1, 2, or 3.`);
    break;
}

// Recursive Functions
// Example:

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
    return find(1, '1');
  }
}

console.log(findSolution(24));
