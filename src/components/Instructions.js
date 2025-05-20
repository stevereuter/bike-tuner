import React from "react";

export default function Instructions() {
    return (
        <div className="text-sm pt-5 pb-5">
            <h2 className="pt-3 text-xl">How to Use</h2>
            <ul className="ml-5 pb-3">
                <li>Enter your bike configuration</li>
                <li>
                    Click store to save the current configuration to the
                    background
                </li>
                <li>
                    Enter changes to the configuration to compare in real time
                </li>
                <li>
                    Click save to be able to come back to this caparison later
                </li>
                <li>Use swap to switch between the two configurations</li>
            </ul>
            * Inches Per Revolution (inches of wheel travel for a single
            crank/pedal rotation)
            <br />
            ** Top Speed is base on comfatable crusing speed of 22mph using 44
            chaining, 13 cassette, and 26" wheels.
        </div>
    );
}
