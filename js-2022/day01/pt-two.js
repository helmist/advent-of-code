const { input } = require('./input.js');

const sortedCals = input
  .map((elf) => {
    return elf
      .split('/n')
      .map((item) => parseInt(item, 10))
      .reduce((sum, cals) => sum + cals, 0);
  })
  .sort((prev, curr) => curr - prev);

console.log(sortedCals.slice(0, 3).reduce((sum, v) => sum + v, 0));
