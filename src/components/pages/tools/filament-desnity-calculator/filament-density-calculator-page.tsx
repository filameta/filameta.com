import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/card";
import { FilamentDensityCalculator } from "./filament-density-calculator";

export function FilamentDensityCalculatorPage() {
    return (
        <article className="container flex flex-wrap pt-6">
            <header className="prose mt-6">
                <h1>Filament Density Calculator</h1>
                <p>
                    Many filament vendors publish the densities of their filaments - sometimes in the Safety data sheet (SDS), which is awesome. What about when the vendor doesn't provide this stat? Well, we can calculate it for ourselves!
                </p>
                <ol>
                    <li>
                        First get measured length of filament you want the density of. The amount depends on how much you trust your scale, larger lengths reduce the error rate. You can use a tool like <a href="#">this</a> to get accurate lengths as some filament can be a bit unyielding.
                        <br />
                        Note this number in the calculator. I typically measure exactly one (1) meter of filament.
                    </li>
                    <li>
                        Second, using a scale, take your filament length(s) and measure its weight in grams. Note this number in the calculator.
                    </li>
                    <li>
                        Last, specify the diameter of the filament e.g. <code>1.75mm</code>.
                    </li>
                    <li>
                        The resulting number will be the density measured in <code>g/cm</code>.
                    </li>
                </ol>
            </header>
            <Card className="mt-6 grow p-6">
                <CardHeader>
                    <CardTitle>
                        Filament Density
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <FilamentDensityCalculator />
                </CardContent>
            </Card>
        </article>
    )
}
