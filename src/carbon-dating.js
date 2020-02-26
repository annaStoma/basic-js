const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' || !sampleActivity) return false;
    sampleActivity = Number(parseFloat(sampleActivity))
    if (sampleActivity > 15 || sampleActivity <= 0 || isNaN(sampleActivity))
        return false;
    let halfLifeOfTheReaction = 0.693 / HALF_LIFE_PERIOD;
    let age = Math.log(MODERN_ACTIVITY / sampleActivity) / halfLifeOfTheReaction;
    return Math.ceil(age);
};