import React, { useState } from "react";
import {
    getCircumference,
    getHighDifference,
    getInchesPerRevolution,
    getLowDifference,
    getRatio,
    getSpeed,
    setTune,
    StorageName,
} from "../service";

export default function Tuner({ storedTuneSaved, currentTuneSaved }) {
    const [storedTune, setStoredTune] = useState(storedTuneSaved);
    const [currentTune, setCurrentTune] = useState(currentTuneSaved);
    const currentTopSpeed = getSpeed(currentTune);
    const storedTopSpeed = getSpeed(storedTune);

    const inputClasses =
        "bg-[#FC5200] text-white border border-white rounded border-1 w-20 text-right";

    return (
        <>
            <div className="flex flex-col md:flex-row flex-wrap gap-5 md:gap-10 xl:gap-20 pb-10">
                <div className="border-b md:border-0 pb-5 md:pb-0 flex gap-3 flex-col">
                    <label className="flex flex-col gap-3 grow">
                        <h2 className="text-xl">Wheel size</h2>
                        <select
                            className={inputClasses}
                            value={currentTune.wheelDiameter}
                            onChange={(e) =>
                                setCurrentTune({
                                    ...currentTune,
                                    wheelDiameter: parseFloat(e.target.value),
                                })
                            }
                        >
                            <option value="25.5906">650mm</option>
                            <option value="26">26"</option>
                            <option value="27.5">27.5"</option>
                            <option value="27.5591">700mm</option>
                            <option value="29">29"</option>
                        </select>
                    </label>
                    <span className="text-3xl text-center">
                        {getCircumference(currentTune.wheelDiameter).toFixed(2)}{" "}
                        IPR
                    </span>
                </div>
                <div className="border-b md:border-0 pb-5 md:pb-0 flex flex-col gap-3">
                    <h2 className="text-xl">Lowest Gear</h2>
                    <label className="flex gap-3 justify-between">
                        Front
                        <input
                            className={inputClasses}
                            type="number"
                            value={currentTune.lowGearFront}
                            onChange={(e) =>
                                setCurrentTune({
                                    ...currentTune,
                                    lowGearFront: parseInt(e.target.value),
                                })
                            }
                        />
                    </label>
                    <label className="flex gap-3 justify-between">
                        Back
                        <input
                            className={inputClasses}
                            type="number"
                            value={currentTune.lowGearBack}
                            onChange={(e) =>
                                setCurrentTune({
                                    ...currentTune,
                                    lowGearBack: parseInt(e.target.value),
                                })
                            }
                        />
                    </label>
                    <span className="text-3xl text-center">
                        {getRatio(
                            currentTune.lowGearFront,
                            currentTune.lowGearBack
                        ).toFixed(2)}
                    </span>
                    <span className="text-3xl text-center">
                        {getInchesPerRevolution(
                            currentTune.wheelDiameter,
                            currentTune.lowGearFront,
                            currentTune.lowGearBack
                        ).toFixed(2)}{" "}
                        IPR
                    </span>
                </div>
                <div className="border-b md:border-0 pb-5 md:pb-0 flex flex-col gap-3">
                    <h2 className="text-xl">Highest Gear</h2>
                    <label className="flex gap-3 justify-between">
                        Front
                        <input
                            className={inputClasses}
                            type="number"
                            value={currentTune.highGearFront}
                            onChange={(e) =>
                                setCurrentTune({
                                    ...currentTune,
                                    highGearFront: parseInt(e.target.value),
                                })
                            }
                        />
                    </label>
                    <label className="flex gap-3 justify-between">
                        Back
                        <input
                            className={inputClasses}
                            type="number"
                            value={currentTune.highGearBack}
                            onChange={(e) =>
                                setCurrentTune({
                                    ...currentTune,
                                    highGearBack: parseInt(e.target.value),
                                })
                            }
                        />
                    </label>
                    <span className="text-3xl text-center">
                        {getRatio(
                            currentTune.highGearFront,
                            currentTune.highGearBack
                        ).toFixed(2)}
                    </span>
                    <span className="text-3xl text-center">
                        {getInchesPerRevolution(
                            currentTune.wheelDiameter,
                            currentTune.highGearFront,
                            currentTune.highGearBack
                        ).toFixed(2)}{" "}
                        IPR
                    </span>
                </div>
                <div className="border-b md:border-0 pb-5 md:pb-0 flex flex-col justify-between gap-3">
                    <h2 className="text-xl">Difference IPR</h2>
                    <span>Low</span>
                    <span className="text-3xl text-center">
                        {getLowDifference(storedTune, currentTune) > 0
                            ? "+"
                            : ""}
                        {getLowDifference(storedTune, currentTune).toFixed(2)}{" "}
                        IPR
                    </span>
                    <span>High</span>
                    <span className="text-3xl text-center">
                        {getHighDifference(storedTune, currentTune) > 0
                            ? "+"
                            : ""}
                        {getHighDifference(storedTune, currentTune).toFixed(2)}{" "}
                        IPR
                    </span>
                </div>
                <div className="border-b md:border-0 pb-5 md:pb-0 flex flex-col gap-3 justify-between">
                    <h2 className="text-xl">Speed</h2>
                    <span className="text-3xl text-center">
                        {currentTopSpeed > storedTopSpeed ? "+" : ""}
                        {(currentTopSpeed - storedTopSpeed).toFixed(2)} MPH
                    </span>
                    <span className="text-3xl text-center">
                        {currentTopSpeed.toFixed(2)} MPH
                    </span>
                </div>
            </div>
            <div className="flex gap-3">
                <button
                    onClick={() => {
                        setStoredTune(currentTune);
                        setTune(StorageName.Stored, currentTune);
                    }}
                    className="bg-[#FC5200] text-white border border-white rounded border-1 px-8"
                >
                    Store
                </button>
                <button
                    onClick={() => {
                        setCurrentTune(currentTune);
                        setTune(StorageName.Current, currentTune);
                    }}
                    className="bg-[#FC5200] text-white border border-white rounded border-1 px-8"
                >
                    Save
                </button>
                <button
                    onClick={() => {
                        const current = { ...currentTune };
                        setCurrentTune(storedTune);
                        setTune(StorageName.Current, storedTune);
                        setStoredTune(current);
                        setTune(StorageName.Stored, current);
                    }}
                    className="bg-[#FC5200] text-white border border-white rounded border-1 px-8"
                >
                    Swap
                </button>
            </div>
        </>
    );
}
