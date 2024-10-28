import { MathJax } from "better-react-mathjax";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import { OrcaMaxVolumetricSpeedCalculator } from "./orca-max-volumetric-speed-calculator";

export function OrcaMaxVolumetricSpeedCalculatorPage() {
    return (
        <>
            <section className="prose mx-auto">
                <p>
                    While most modern printers can reach some insane movement speeds, actual printing speed is largely bound to the max-volumetric speed.
                </p>
                <p>
                    As volumetric-speed increases, the amount of energy needed to melt the filament increases. Working with filament with a greater temperature can mitigate this (so called high-flow filaments). Increasing the efficacy of the hot-end also increases the potential of higher volumetric-speeds as well (so call high-flow hot-ends).
                </p>
                <p>
                    One method of calculating your max-volumetric speed is to print a model that slowly increases the print speed (which increases the filament's volumetric speed) until the print fails or surface quality dips.
                </p>
                <p>
                    OrcaSlicer has a wonderful calibration tool to help with finding an ideal max-volumetric speed.
                </p>
                <ol>
                    <li>
                        From a new OrcaSlicer project, select the printer/filament/printing profile for the filament you want to test. Typically, temperature is the most impactful parameter for this test.
                    </li>
                    <li>
                        Select the "Calibration - More... - Max flowrate" menu item. A starting volumetric speed of <MathJax inline>\(5mm^3/s\)</MathJax> is reasonable for most filaments (lower this if printing TPU filaments).
                    </li>
                    <li>
                        Print the generated model as normal and note at what height the print starts to deteriorate. Note this height in the calculator.
                        <br />
                        Look for:
                        <ul>
                            <li>Changes in finish sheen or color (e.g. transitioning from glossy to matte, etc.).</li>
                            <li>Extrusion failure (e.g. printer detects a clog, under-extrusion, etc.).</li>
                            <li>Changes in warping behavior (e.g. if the walls start to noticeably warp).</li>
                        </ul>
                        When in doubt, choose a lower height.
                    </li>
                    <li>
                        Update your filament profile with the resulting max-volumetric speed.
                    </li>
                </ol>
                <p>
                    And that's all!
                </p>
            </section>
            <Card className="grow w-full max-w-xl md:p-6 mx-auto">
                <CardHeader>
                    <CardTitle>
                        Filament Density
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <OrcaMaxVolumetricSpeedCalculator />
                </CardContent>
            </Card>
        </>
    )
}
