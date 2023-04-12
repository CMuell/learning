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
function triangle(len) {
  for (let pound = '#'; pound.length < len; pound += '#') {
    console.log(pound);
  }
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

// myNumber = 8367;
// funcResult = isEven(myNumber, 'ifelse');
// funcResult2 = isEven(myNumber, 'switchcase');

/* Bean Counting

Write a function countBs that takes a string as its only argument 
and returns a number that indicates how many uppercase `b` characters there are in the string.
*/

function countChars(text, char) {
  theBList = 0;
  for (letter in text) {
    if (text[letter] == char) {
      theBList++;
    }
  }
  console.log(theBList);
}

// countChars('This Big bulky Burger begrudgingly Burns', 'B');

/* phi coefficient 

topLeft = 00, topRight = 01
bottomLeft = 10, bottomRight = 11

*/

function phiCoefficient(tl, tr, bl, br) {
  function sum(a, b) {
    return a + b;
  }

  dividend = br * tl - bl * tr;
  divisor = Math.sqrt(sum(bl, br) * sum(tl, tr) * sum(tr, br) * sum(tl, bl));

  console.log(dividend / divisor);
}

//phiCoefficient(76, 9, 4, 1);

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

// LEETCODE PALINDROME - EASY

function isPalindrome(x) {
  function halves(arr, split) {
    console.log('3. entered halves function');
    console.log(`arr: ${arr} | split: ${split}`);
    let firstHalf = Number(arr.slice(0, split).reverse().join(''));
    let secondHalf = Number(arr.slice(split + 1, arr.length).join(''));
    return { first: firstHalf, second: secondHalf };
  }
  let numArray = [];
  x = `${x}`;
  for (number of x) {
    numArray.push(Number(number));
  }
  console.log(`1. numArray assigned: ${numArray}`);
  switch (Boolean(numArray[0]) == false ? 1 : 2) {
    case 1:
      if (numArray.length == 1) {
        return true;
      }
      return false;
    case 2:
      if (numArray.length <= 2) {
        console.log(`2. entered <= 2 condition`);
        if (numArray.length != 2) {
          return true;
        } else {
          console.log('3. entered == 2 condition');
          if (numArray[0] == numArray[1]) {
            console.log(`4. Function Completed | Result: True`);
            return true;
          } else {
            return false;
          }
        }
      } else if (numArray.length % 2 == 0) {
        console.log('2. even number of digits');
        let split = numArray.length / 2;
        let half = halves(numArray, split);
        console.log(half.first, half.second);
        if (half.first == half.second) {
          return true;
        }
      } else if (numArray.length % 2 != 0) {
        console.log('2. odd number of digits');
        let split = (numArray.length - 1) / 2;
        let half = halves(numArray, split);
        if (half.first == half.second) {
          return true;
        }
      }
  }
}

//let i = 0;

//console.log(isPalindrome(i));

// LEETCODE TWO SUM - EASY
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

2 <= nums.length <= 104 ... Minimum 2 numbers in array
-109 <= nums[i] <= 109  ... Number value range from -109 to 109
-109 <= target <= 109   ... Target value range from -109 to 109
*/

var twoSum = function (nums, target) {
  // check array length. Must be 2 or greater
  if (nums.length < 2) {
    return false;
  } else {
    return true;
  }
};

console.log(twoSum([2, 5, 3], 8));
