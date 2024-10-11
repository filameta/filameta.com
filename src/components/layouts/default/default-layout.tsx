import { useOutlet } from "react-router-dom";
import { Footer } from "./footer";
import { Nav } from "./nav";

export function DefaultLayout() {
    const outlet = useOutlet();
    return (
        <div className="flex flex-col">
            <Nav />
            <main className="p-6 pt-20 pb-20 min-h-screen relative">
                {outlet}
                <div className="absolute bottom-0 left-0 right-0 bg-brand text-white text-center py-1 px-3">
                    This site is very much still under development - Silvenga
                </div>
            </main>
            <Footer />
        </div>
    )
}
