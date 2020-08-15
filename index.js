const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function batteries(arr) {
  return arr.reduce((totalBatteries, element) => element + totalBatteries, 0);
}
console.log(batteries(batteryBatches));

