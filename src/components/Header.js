import React from "react";
import logo from "../images/48.png";

export default function Header() {
    return (
        <header className="flex items-center gap-3 pb-5">
            <h1 className="text-3xl flex items-center gap-3">
                <img src={logo} alt="" />
                Bike Tuner
            </h1>
        </header>
    );
}
