import assert from 'assert';

function twoSum(numbers, target) {
  const map = new Map();
  numbers.forEach((number, index) => {
    map.set(number, index)
  })

  const firstIndex = numbers.findIndex((number, index) => {
    const value = map.get(target-number);
    return value && value !== index;
  });

  if (firstIndex === undefined) {
    throw new Error(`Not found for target ${target}`)
  }
  return [firstIndex, map.get(target - numbers[firstIndex])]
}

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1])
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2])
assert.deepEqual(twoSum([3, 3], 6), [0, 1])