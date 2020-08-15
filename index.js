const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function batteries(arr) {
  let totalBatteries = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return totalBatteries;
}
console.log(batteries(batteryBatches));