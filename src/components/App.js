import { Details, Footer, Header, Instructions } from ".";
import Tuner from "./Tuner";

function App({ storedTune, currentTune }) {
    return (
        <div className="p-5 bg-gray-900 text-white md:h-screen w-screen">
            <Header />
            <main>
                <Details />
                <Tuner
                    storedTuneSaved={storedTune}
                    currentTuneSaved={currentTune}
                />
                <Instructions />
            </main>
            <Footer />
        </div>
    );
}

export default App;
