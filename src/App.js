import { useState } from "react";
import {
    getCircumference,
    getHighDifference,
    getInchesPerRevolution,
    getLowDifference,
    getRatio,
} from "./helpers";
import { Details, Footer, Header, Instructions } from "./components";

function App() {
    const [storedTune, setStoredTune] = useState({
        wheelDiameter: 26,
        lowGearFront: 22,
        lowGearBack: 28,
        highGearFront: 44,
        highGearBack: 13,
    });
    const [currentTune, setCurrentTune] = useState({
        wheelDiameter: 29,
        lowGearFront: 30,
        lowGearBack: 42,
        highGearFront: 30,
        highGearBack: 11,
    });
    const currentTopSpeed =
        getInchesPerRevolution(
            currentTune.wheelDiameter,
            currentTune.highGearFront,
            currentTune.highGearBack
        ) / 12.566370614359173;
    const storedTopSpeed =
        getInchesPerRevolution(
            storedTune.wheelDiameter,
            storedTune.highGearFront,
            storedTune.highGearBack
        ) / 12.566370614359173;

    const inputClasses =
        "bg-[#FC5200] text-white border border-white rounded border-1 w-20 text-right";

    return (
        <div className="p-5 bg-gray-900 text-white h-screen">
            <Header />
            <main>
                <Details />
                <div className="flex items-stretch gap-8 pb-5">
                    <div className="flex gap-3 flex-col">
                        <label className="flex flex-col gap-3 grow">
                            <h2 className="text-xl">Wheel size</h2>
                            <select
                                className={inputClasses}
                                value={currentTune.wheelDiameter}
                                onChange={(e) =>
                                    setCurrentTune({
                                        ...currentTune,
                                        wheelDiameter: parseFloat(
                                            e.target.value
                                        ),
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
                            {getCircumference(
                                currentTune.wheelDiameter
                            ).toFixed(2)}{" "}
                            IPR
                        </span>
                    </div>
                    <div className="flex flex-col gap-3">
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
                    <div className="flex flex-col gap-3">
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
                    <div className="flex flex-col justify-between gap-3">
                        <h2 className="text-xl">Difference IPR</h2>
                        <span>Low</span>
                        <span className="text-3xl text-center">
                            {getLowDifference(storedTune, currentTune) > 0
                                ? "+"
                                : ""}
                            {getLowDifference(storedTune, currentTune).toFixed(
                                2
                            )}{" "}
                            IPR
                        </span>
                        <span>High</span>
                        <span className="text-3xl text-center">
                            {getHighDifference(storedTune, currentTune) > 0
                                ? "+"
                                : ""}
                            {getHighDifference(storedTune, currentTune).toFixed(
                                2
                            )}{" "}
                            IPR
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 justify-between">
                        <h2 className="text-xl">Top Speed</h2>
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
                        onClick={() => setStoredTune(currentTune)}
                        className="bg-[#FC5200] text-white border border-white rounded border-1 px-8"
                    >
                        Store
                    </button>
                    <button
                        onClick={() => {
                            const current = { ...currentTune };
                            setCurrentTune(storedTune);
                            setStoredTune(current);
                        }}
                        className="bg-[#FC5200] text-white border border-white rounded border-1 px-8"
                    >
                        Swap
                    </button>
                </div>
                <Instructions />
            </main>
            <Footer />
        </div>
    );
}

export default App;
