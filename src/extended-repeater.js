module.exports = function repeater(str, options) {
    defaultValue = {
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|'
    }
    if (!options.repeatTimes && options.repeatTimes == undefined) options.repeatTimes = defaultValue.repeatTimes;
    if (!options.separator && options.separator == undefined) options.separator = defaultValue.separator;
    if (typeof options.addition !== 'string' && options.addition == undefined && options.addition !== null) {
        options.addition = defaultValue.addition;
    }
    if (!options.additionRepeatTimes && options.additionRepeatTimes == undefined) options.additionRepeatTimes = defaultValue.additionRepeatTimes;
    if (!options.additionSeparator && options.additionSeparator == undefined) options.additionSeparator = defaultValue.additionSeparator;

    let result = new String();
    let separators = new String();

    for (let i = 1; i <= options.additionRepeatTimes; i++) {
        if (i == options.additionRepeatTimes) separators += options.addition;
        else separators += options.addition + options.additionSeparator;
    }

    for (let i = 1; i <= options.repeatTimes; i++) {
        if (i == options.repeatTimes) result += str + separators;
        else
            result += str + separators + options.separator;
    }
    return result;
};
