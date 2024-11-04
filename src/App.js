import { useState } from "react";
import logo from "./images/48.png";
import {
    getCircumference,
    getHighDifference,
    getInchesPerRevolution,
    getLowDifference,
    getRatio,
} from "./helpers";

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
            <header className="flex items-center gap-3 pb-5">
                <img src={logo} alt="Strava" />
                <h1 className="text-3xl">Bike Tuner</h1>
            </header>
            <main>
                <p className="pb-5">
                    For seeing how different wheel and gear combinations affect
                    the speed of your bike. You can swap between two different
                    combinations and see the difference.
                </p>
                <div className="flex items-stretch gap-8 pb-5">
                    <div className="flex gap-3 flex-col">
                        <label className="flex flex-col gap-3 grow">
                            <span className="text-xl">Wheel size</span>
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
                        <h2>Lowest Gear</h2>
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
                        <h2>Highest Gear</h2>
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
                        <h2>Difference IPR</h2>
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
                        Top Speed
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
                <div className="text-sm pt-5">
                    IPR - Inches Per Revolution
                    <br />
                    Top Speed is base on comfatable crusing speed of 22mph using
                    44 chaining, 13 cassette, and 26" wheels.
                </div>
            </main>
            <footer className="absolute bottom-5 text-center w-full">
                <a
                    style={{
                        display: "inline-block",
                        "background-color": "#FC5200",
                        color: "#fff",
                        padding: "5px 10px 5px 30px",
                        "font-size": "11px",
                        "font-family": "Helvetica, Arial, sans-serif",
                        "white-space": "nowrap",
                        "text-decoration": "none",
                        "background-repeat": "no-repeat",
                        "background-position": "10px center",
                        "border-radius": "3px",
                        "background-image":
                            "url('https://badges.strava.com/logo-strava-echelon.png')",
                    }}
                    href="https://strava.com/athletes/143939440"
                    target="_clean"
                >
                    Follow me on
                    <img
                        src="https://badges.strava.com/logo-strava.png"
                        alt="Strava"
                        style={{
                            "margin-left": "2px",
                            "vertical-align": "text-bottom",
                        }}
                        height={13}
                        width={51}
                    />
                </a>{" "}
            </footer>
        </div>
    );
}

export default App;
