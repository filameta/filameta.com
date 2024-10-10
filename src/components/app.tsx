import { HelmetProvider } from "react-helmet-async";
import { Router } from "./pages/router";

export function App() {
    return (
        <HelmetProvider>
            <Router />
        </HelmetProvider>
    )
}

