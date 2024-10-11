import { MathJaxContext } from "better-react-mathjax";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "./pages/router";

export function App() {
    return (
        <HelmetProvider>
            <MathJaxContext hideUntilTypeset="first">
                <Router />
            </MathJaxContext>
        </HelmetProvider>
    )
}

