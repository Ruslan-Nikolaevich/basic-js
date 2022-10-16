const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let currentMonth;
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch (error) {
    throw new Error('Invalid date!');
  }
  
 currentMonth = date.getMonth();
 if (currentMonth < 2 || currentMonth > 10) {
    return 'winter';
 }
 if (currentMonth >= 2 && currentMonth < 5) {
  return 'spring';
}
if (currentMonth >= 5 && currentMonth < 8) {
  return 'summer';
}
if (currentMonth >= 8 && currentMonth < 11) {
  return 'autumn';
}


}

module.exports = {
  getSeason
};
