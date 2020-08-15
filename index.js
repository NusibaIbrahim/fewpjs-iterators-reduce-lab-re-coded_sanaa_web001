const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function batteries(arr) {
  var totalBatteries = 0;
  return arr.reduce((totalBatteries, element) => element + totalBatteries);
}
console.log(batteries(batteryBatches));

