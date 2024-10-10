import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
if ((module as any).hot) {
    (module as any).hot.accept();
}
