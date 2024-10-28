import { RouteContextProps } from "../router";
import { FilamentDensityCalculatorPage } from "./filament-desnity-calculator/filament-density-calculator-page";
import { OrcaMaxVolumetricSpeedCalculatorPage } from "./orca-max-volumetric-speed-calculator/orca-max-volumetric-speed-calculator-page";
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
        {
            path: "orca-max-volumetric-speed-calculator",
            element: <OrcaMaxVolumetricSpeedCalculatorPage />,
            handle: {
                title: "Orca Max-Volumetric Speed Calculator",
                description: "Calculate the max-volumetric speed the filament and hotend can handle."
            } satisfies RouteContextProps
        },
    ]
}
