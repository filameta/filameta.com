import { MathJax } from "better-react-mathjax";
import { ExternalLink } from "@/components/utilities/external-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import { FilamentDensityCalculator } from "./filament-density-calculator";

export function FilamentDensityCalculatorPage() {
    return (
        <>
            <section className="prose mx-auto">
                <p>
                    Many filament vendors publish the densities of their filaments - sometimes in the Safety data sheet (SDS), which is awesome! What if you're out of luck?
                </p>
                <p>
                    Well, we can calculate it for ourselves!
                </p>
                <ol>
                    <li>
                        First get a measured length of filament you want the density of. The amount depends on how much you trust your scale, larger lengths reduce the error rate. You can print a tool like <ExternalLink to="https://www.printables.com/model/1036320-filament-density-calulation-tool" rel="external" target="_blank">this</ExternalLink> to get accurate lengths if your filament proves unyielding.
                        <br />
                        Note this number in the calculator. I typically measure exactly one (1) meter of filament.
                    </li>
                    <li>
                        Second, using a scale, take your filament length(s) and measure its weight in grams (g). Note this number in the calculator.
                    </li>
                    <li>
                        Last, specify the diameter of the filament e.g. 1.75mm.
                    </li>
                    <li>
                        The resulting number will be the density measured in <MathJax inline>\(g/cm^3\)</MathJax>.
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
                    <FilamentDensityCalculator />
                </CardContent>
            </Card>
        </>
    )
}
