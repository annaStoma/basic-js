module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw new Error();
    if (arr.length == 0) return arr;
    let length = arr.length;
    let transformArray = [];
    for (let i = 0; i < length; i++) {
        if (arr[i] === '--double-next') {
            if (length - 1 > i) {
                transformArray.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i > 0) {
                transformArray.push(arr[i - 1]);
            }
        } else if (arr[i] === '--discard-prev') {
            if (i > 0) {
                transformArray.pop();
            }
        } else if (arr[i] === '--discard-next') {
            if (length - 1 > i) {
                i++;
            }
        } else {
            transformArray.push(arr[i]);
        }
    }
    return transformArray;
};
