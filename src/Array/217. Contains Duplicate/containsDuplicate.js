import assert from "assert";

function containsDuplicate(nums) {
  const set = new Set()

  return nums.some(num => {
    if (set.has(num)) {
      return true;
    }

    set.add(num)
  })
}

assert.strictEqual(containsDuplicate([1,2,3,1]), true)
assert.strictEqual(containsDuplicate([]), false)
assert.strictEqual(containsDuplicate([1,2,3,4]), false)
assert.strictEqual(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true)