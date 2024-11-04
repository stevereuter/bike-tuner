export function getCircumference(diameter) {
    return diameter * Math.PI;
}

export function getRatio(front, back) {
    return front / back;
}

export function getInchesPerRevolution(diameter, front, back) {
    return getCircumference(diameter) * getRatio(front, back);
}

export function getLowDifference(stored, currentTune) {
    const storedIPR = getInchesPerRevolution(
        stored.wheelDiameter,
        stored.lowGearFront,
        stored.lowGearBack
    );
    const currentIPR = getInchesPerRevolution(
        currentTune.wheelDiameter,
        currentTune.lowGearFront,
        currentTune.lowGearBack
    );
    return currentIPR - storedIPR;
}

export function getHighDifference(stored, currentTune) {
    const storedIPR = getInchesPerRevolution(
        stored.wheelDiameter,
        stored.highGearFront,
        stored.highGearBack
    );
    const currentIPR = getInchesPerRevolution(
        currentTune.wheelDiameter,
        currentTune.highGearFront,
        currentTune.highGearBack
    );
    return currentIPR - storedIPR;
}
