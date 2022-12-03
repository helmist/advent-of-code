const { input } = require('./input.js');

const sortedCals = input
  .map((elf) => {
    return elf
      .split('\n')
      .map((item) => parseInt(item, 10))
      .reduce((sum, cals) => sum + cals, 0);
  })
  .sort((prev, curr) => curr - prev);

console.log(sortedCals[0] + sortedCals[1] + sortedCals[2]);
