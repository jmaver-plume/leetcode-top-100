function valueIndexMap (arr) {
  return arr.reduce((acc, item, index) => {
    acc[item] = index;
    return acc;
  }, {})
}

function getKeyFromTriplet (triplet) {
  return triplet.sort((a, b) => b - a).join(":");
}

function getTripletFromKey (key) {
  return key.split(":").map(v => parseInt(v));
}

function threeSum (nums) {
  const map = valueIndexMap(nums);
  const triplets = new Set();

  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const numI = nums[i];
      const numJ = nums[j];
      const partialSum = numJ + numI;
      const missing = 0 - partialSum;

      const numKIndex = map[missing];
      if (numKIndex && numKIndex !== i && numKIndex !== j) {
        const key = getKeyFromTriplet([numI, numJ, missing]);
        if (!triplets.has(key)) {
          triplets.add(key);
        }
      }
    }
  }

  return Array.from(triplets).map(key => getTripletFromKey(key));
};