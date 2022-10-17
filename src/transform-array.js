const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  
 

  
  let rez = [...arr];
  for (let i = 0; i < rez.length; i++) {
    if (rez[i] == '--discard-next') {
      if (rez[i+1]) {
        rez.splice([i+1],1);
      }
      rez.splice([i],1);
    } else if (rez[i] == '--discard-prev') {
      if (rez[i-1]) {
        rez.splice([i-1],1);
      }
      rez.splice([i],1);
    } else if (rez[i] == '--double-next') {
      if (rez[i+1]) {
        rez[i] = rez[i+1]
      } else {
        rez.splice([i],1);
      }
    } else if (rez[i] == '--double-prev') {
      if (rez[i-1]) {
        rez[i] = rez[i-1]
      } else {
        rez.splice([i],1);
      }
    }
  }
  return rez;
  
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
