import { Link } from "react-router-dom";

export function LandingPage() {
    return (
        <div className="flex flex-col">
            <Hero />
        </div>
    );
}

function Hero() {

    return (
        <div className="flex flex-col items-center">
            <img className="w-96 -mb-12" src={new URL("../../../assets/theme/happy-fox.webp", import.meta.url).toString()}
                alt="Fila the fox"
                width="512"
                height="512" />
            <div className="text-6xl font-light text-gray-950 text-center">
                Fila<span className="opacity-60 font-normal">meta</span>
            </div>
            <div className="text-lg text-end text-gray-600">
                A database of 3D-Printing tips and tools.
            </div>

            <Link className="mt-6 text-lg text-center border rounded-lg bg-brand hover:bg-brand-dark text-white px-3 py-2" to="/tools/" role="button">
                All Tools and Calculators
            </Link>

            <p className="mt-6">
                And <span className="underline decoration-orange-500 decoration-2">Fila</span> the fox says hi!
            </p>
        </div>
    )
}
