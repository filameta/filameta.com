import { RouteContextProps } from "../router";
import { FilamentDensityCalculatorPage } from "./filament-desnity-calculator/filament-density-calculator-page";

export function getToolsRoutes() {
    return [
        {
            path: "filament-density-calculator",
            element: <FilamentDensityCalculatorPage />,
            handle: {
                title: "Filament Density Calculator",
                description: "Calculate unknown filament densities with a scale and math."
            } satisfies RouteContextProps
        }
    ]
}
