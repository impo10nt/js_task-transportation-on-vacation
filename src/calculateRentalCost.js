/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const rentPerDay = 40;
  const threeDaysOff = 20;
  const sevenDaysOff = 50;

  if (days < 3) {
    return days * rentPerDay;
  }

  if (days < 7) {
    return days * rentPerDay - threeDaysOff;
  }

  if (days >= 7) {
    return days * rentPerDay - sevenDaysOff;
  }
}

module.exports = calculateRentalCost;
