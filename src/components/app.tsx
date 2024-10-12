import { MathJax2Config, MathJaxContext } from "better-react-mathjax";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "./pages/router";

const config = {
    "fast-preview": {
        disabled: true
    },
    tex2jax: {
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"]
        ],
        displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"]
        ],
    },
    displayAlign: "center",
    messageStyle: "none"
} satisfies MathJax2Config & Record<string, unknown>;

export function App() {
    return (
        <HelmetProvider>
            <MathJaxContext
                version={3}
                config={config}
                hideUntilTypeset="first"
                src={new URL("npm:mathjax/es5/tex-svg-full.js", import.meta.url).toString()}>
                <Router />
            </MathJaxContext>
        </HelmetProvider>
    )
}

