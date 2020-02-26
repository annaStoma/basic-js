module.exports = function createDreamTeam(arr) {
    let resultArray = new Array();
    if (Array.isArray(arr)) {
        arr.forEach(name => {
            if (typeof(name) === "string") {
                name = name.trim();
                resultArray.push(name[0].toUpperCase());
            }
        });
        return resultArray.sort().join('');
    } else return false;
};
