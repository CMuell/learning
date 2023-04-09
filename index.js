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
  let board = ``;

  for (let n = 0; n <= 8; n++) {
    switch (n % 2 == 0 ? true : false) {
      case true:
        board += ` `;
        break;
      case false:
        board += `#`;
        break;
    }
  }
  return board;
}

console.log(checkerboard());
