import React from "react";
import logo from "../images/48.png";

export default function Header() {
    return (
        <header className="flex items-center gap-3 pb-5">
            <img src={logo} alt="Strava" />
            <h1 className="text-3xl">Bike Tuner</h1>
        </header>
    );
}
