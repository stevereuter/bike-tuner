import React from "react";

export default function Instructions() {
    return (
        <div className="text-sm pt-5">
            <h2 className="pt-3 text-xl">How to Use</h2>
            <ul className="ml-5 pb-3">
                <li>Enter your bike configuration</li>
                <li>Click save</li>
                <li>Enter changes to the configuration to compare</li>
                <li>See the differences</li>
                <li>
                    You can use swap to switch between the two configurations
                </li>
            </ul>
            IPR - Inches Per Revolution (inches of wheel travel for a single
            crank/pedal rotation)
            <br />
            Top Speed is base on comfatable crusing speed of 22mph using 44
            chaining, 13 cassette, and 26" wheels.
        </div>
    );
}
