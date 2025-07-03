export function getCircumference(diameter) {
    return diameter * Math.PI;
}

export function getRatio(front, back) {
    return front / back;
}

export function getInchesPerRevolution(diameter, front, back) {
    return getCircumference(diameter) * getRatio(front, back);
}

const MPH_CONVERSION = 12.566370614359173;

export function getSpeedHigh(tune) {
    return (
        getInchesPerRevolution(
            tune.wheelDiameter,
            tune.highGearFront,
            tune.highGearBack
        ) / MPH_CONVERSION
    );
}

export function getSpeedLow(tune) {
    return (
        getInchesPerRevolution(
            tune.wheelDiameter,
            tune.lowGearFront,
            tune.lowGearBack
        ) / MPH_CONVERSION
    );
}
