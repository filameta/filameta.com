import { RouteContextProps } from "../router";
import { FilamentDensityCalculatorPage } from "./filament-desnity-calculator/filament-density-calculator-page";
import { OrcaRetractionCalculatorPage } from "./orca-retraction-calculator/orca-retraction-calculator-page";

export function getToolsRoutes() {
    return [
        {
            path: "filament-density-calculator",
            element: <FilamentDensityCalculatorPage />,
            handle: {
                title: "Filament Density Calculator",
                description: "Calculate unknown filament densities with a scale and math."
            } satisfies RouteContextProps
        },
        {
            path: "orca-retraction-calculator",
            element: <OrcaRetractionCalculatorPage />,
            handle: {
                title: "OrcaSlicer Retraction Calculator",
                description: "Calculate the ideal retraction using OrcaSlicer's retraction calibration test."
            } satisfies RouteContextProps
        },
    ]
}
