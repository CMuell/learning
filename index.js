function getPaycheck(baseWage, overtimeHours = null) {
  const weekHours = 40;
  const timeAndHalf = 1.5;
  const doubleTime = 2.0;
  const deductions = 0.75;
  overtimePay = baseWage * timeAndHalf * overtimeHours;
  basePay = baseWage * weekHours;
  const currentEarnings = basePay * 2 + overtimePay;
  const net = currentEarnings * deductions;
  return { grossPay: currentEarnings, netPay: net };
}

pay = getPaycheck(24.5, 20);

// Triangle Loop - Challenge #1
for (let pound = '#'; pound.length < 8; pound += '#') {
  console.log(pound);
}

// FizzBuzz - Challenge #2
function fizzBuzz() {
  arr = [];
  for (let n = 1; n <= 10 ** 2; n++) {
    switch (n % 3 == 0 ? true : false) {
      case true:
        arr[n - 1] = 'Fizz';
        break;
      case false:
        switch (n % 5 == 0 ? true : false) {
          case true:
            arr[n - 1] = 'Buzz';
            break;
          case false:
            arr[n - 1] = n;
            break;
        }
    }
  }
  return arr;
}

console.log(fizzBuzz());

// Checkerboard - Challenge #3
/* 
8 x 8 grid
single string
grid row terminated with \n
first row starts with ` `
*/

function checkerboard() {
  let board = '',
    pattern = '';
  function writeRow(current, goal) {}
  function even(n) {
    pattern = ' #';
  }
  function odd(n) {
    pattern = '# ';
  }
}

/*

if `row` is even, the first character in the string is ` `. 

*/

function execute(num) {
  console.log(findSolution(num));
  // target = number to reach
  function findSolution(target) {
    function find(current, history) {
      // if binding `current` is equal to `target`, the solution has been reached
      // and we will return `history` which is a string containing the steps used to reach the target
      if (current == target) {
        return history;
      }
      // if binding `current` is larger than `target`, we will return `null` since
      // any further operation will also be greater than `target`
      else if (current > target) {
        return null;
      }
      // finally, if the binding `current` is less than `target`, we will call this function from
      // within itself.
      else {
        return (
          /*
          these two function calls are equal to:
            find(1 + 5, `(1 + 5)`) || find(1 * 3, `(1 * 3)`)

            then this local binding, if current (6) is still less than target (24), 
            would again call find() in the `else` block.

            this time the call would look like:
              find(6 + 5, `((1 + 5) + 5)`) || find(6 * 3, `((1 * 3) * 3)`)

            and so on, until either `current` == `target`, or `current` > `target`. 
            Only current matching target will return the history.
        */
          find(current + 5, `(${history} + 5)`) ||
          find(current * 3, `(${history} * 3)`)
        );
      }
    }
    // First call of find()
    return find(1, '1');
  }
}
