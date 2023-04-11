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

//pay = getPaycheck(24.5, 20);

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

//console.log(fizzBuzz());

// Checkerboard - Challenge #3
/* 
8 x 8 grid
single string
grid row terminated with \n
first row starts with ` `

Each row needs to be written in order
Each string character needs to be concatenated based on whether it is an even or odd array index.
When each string character of the row is concatenated, `\n` must be added. 
The row should then be incremented.
This process should continue until the current row == the target rows.
*/

function checkerboard(grid) {
  function row(rowNumber, rowLength) {
    if (rowNumber % 2 == 0) {
      return even(rowLength);
    } else {
      return odd(rowLength);
    }
  }
  function even(rowLength) {
    rowString = ``;
    for (let i = 0; i < rowLength; i++) {
      if (i % 2 == 0) {
        rowString += ` `;
      } else {
        rowString += '#';
      }
    }
    return rowString;
  }
  function odd(rowLength) {
    rowString = ``;
    for (let i = 0; i < rowLength; i++) {
      if (i % 2 == 0) {
        rowString += '#';
      } else {
        rowString += ' ';
      }
    }
    return rowString;
  }

  let target = grid,
    boardString = ``;

  for (let rowNum = 0; rowNum < target; rowNum++) {
    boardString += `${row(rowNum, target)}\n`;
  }
  return boardString;
}

// Challenge #4

function min(a, b) {
  return Math.min(a, b);
}
//console.log(min(2, 4));

// Challenge #5

/* 
  Zero is even,
  One is odd,
  For any other number `N`, its evenness is the same as `N - 2`
*/

function isEven(num, sw) {
  var startTime = performance.now();
  num = Math.abs(num);

  if (sw == 'ifelse') {
    recIfElse(num);
  } else if (sw == 'switchcase') {
    recSwitch(num);
  }

  // recursive function using switch case
  function recSwitch(current) {
    switch (current == 0 ? true : false) {
      case true:
        var endTime = performance.now();
        return {
          result: console.log(true),
          time: console.log(`Finished in ${endTime - startTime} ms`),
        };
      case false:
        switch (current == 1 ? true : false) {
          case true:
            return console.log(false);
          case false:
            recSwitch(current - 2);
        }
    }
  }
  // recursive function using if else
  function recIfElse(current) {
    if (current == 0) {
      var endTime2 = performance.now();
      return {
        result: console.log(true),
        time: console.log(`Finished in ${endTime2 - startTime} ms`),
      };
    } else if (current == 1) {
      return console.log(false);
    } else {
      recIfElse(current - 2);
    }
  }
}

myNumber = 8367;
funcResult = isEven(myNumber, 'ifelse');
funcResult2 = isEven(myNumber, 'switchcase');

// End

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
