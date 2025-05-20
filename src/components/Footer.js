import React from "react";

export default function Footer() {
    return (
        <footer className="text-center w-full">
            <a
                className="focus:outline focus:outline-white border border-white rounded border-1"
                style={{
                    display: "inline-block",
                    backgroundColor: "#FC5200",
                    color: "#000",
                    padding: "5px 10px 5px 30px",
                    fontSize: "11px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "10px center",
                    borderRadius: "3px",
                    backgroundImage:
                        "url('https://badges.strava.com/logo-strava-echelon.png')",
                }}
                href="https://strava.com/athletes/143939440"
            >
                Follow me on
                <img
                    src="https://badges.strava.com/logo-strava.png"
                    alt="Strava"
                    style={{
                        marginLeft: "2px",
                        verticalAlign: "text-bottom",
                    }}
                    height={13}
                    width={51}
                />
            </a>
        </footer>
    );
}
