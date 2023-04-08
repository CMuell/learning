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


for (let pound = '#'; pound.length < 7; )