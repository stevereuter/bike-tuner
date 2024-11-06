/**
 * @type Tune
 * @property {number} lowGearFront
 * @property {number} lowGearBack
 * @property {number} highGearFront
 * @property {number} highGearBack
 * @property {number} wheelDiameter
 */

export const StorageName = {
    Stored: "storedTune",
    Current: "currentTune",
};

/** @type {Tune} */
const defaultTune = {
    lowGearFront: 30,
    highGearFront: 46,
    lowGearBack: 42,
    highGearBack: 11,
    wheelDiameter: 29,
};

/**
 * @param {StorageName} name
 * @returns {Tune}
 */
export function getTune(name) {
    const rawData = localStorage.getItem(name);
    if (!rawData) return defaultTune;
    return JSON.parse(rawData);
}

/**
 * @param {StorageName} name
 * @param {Tune} tune
 */
export function setTune(name, tune) {
    localStorage.setItem(name, JSON.stringify(tune));
}
