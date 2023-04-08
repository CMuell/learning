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

// OR operator: ||
// returns left value if statement converted to `true`
// returns right value if statement converted to `false`
