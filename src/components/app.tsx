import { MathJaxContext } from "better-react-mathjax";
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
        ]
    },
    messageStyle: "none"
};

export function App() {
    return (
        <HelmetProvider>
            <MathJaxContext
                version={2}
                config={config}
                onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
                hideUntilTypeset="first">
                <Router />
            </MathJaxContext>
        </HelmetProvider>
    )
}

