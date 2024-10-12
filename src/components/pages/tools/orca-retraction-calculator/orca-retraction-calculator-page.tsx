import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import { OrcaRetractionCalculator } from "./orca-retraction-calculator";

export function OrcaRetractionCalculatorPage() {
    return (
        <>
            <section className="prose mx-auto">
                <p>
                    Reactions are used in 3D-printing to reduce the pressure in the hotend by pulling back the filament slightly.
                    Too little retraction (causing too much pressure) and filament may leak from the hotend during non-printing moves. Too much retraction, and the molten filament may separate from the non-molten filament, also causing leaking during movements.
                </p>
                <p>
                    Finding the middle-ground between too much retraction and too little is important for print quality.
                </p>
                <p>
                    A common method of finding the ideal retraction length is by using OrcaSlicer's retraction calibration test.
                </p>
                <ol>
                    <li>
                        From a new project, select the printer/filament/printing profile for the filament you want to test.
                    </li>
                    <li>
                        Then select the "Calibration - Retraction test" menu item. Direct drive extruders (DDE) can typically use smaller retraction lengths (e.g. &lt; 2mm), while bowden extruders may require higher lengths (e.g. 6+). Note the start and step values in the calculator.
                    </li>
                    <li>
                        Print the generated model as normal and note at what points stringing starts and ends. Note this height in the calculator.
                    </li>
                    <li>
                        Update your filament profile overrides with the resulting retraction length.
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
                    <OrcaRetractionCalculator />
                </CardContent>
            </Card>
        </>
    )
}
