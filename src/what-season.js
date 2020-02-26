module.exports = function getSeason(date) {
    let month = date;
    if (date instanceof Date && !isNaN(date.valueOf()) == false && date != undefined) throw new Error;
    if (date != undefined) { month = date.getMonth(); } else return 'Unable to determine the time of year!';
    if (month == 2 || month == 3 || month == 4) return 'spring';
    if (month == 5 || month == 6 || month == 7) return 'summer';
    if (month == 8 || month == 9 || month == 10) return 'autumn';
    if (month == 11 || month == 0 || month == 1) return 'winter';
};