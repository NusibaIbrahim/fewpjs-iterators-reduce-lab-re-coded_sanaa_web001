const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function batteries(arr) {
  let totalBatteries = arr.reduce(reducer, 0);
  return totalBatteries;
}
console.log(batteries(batteryBatches));
