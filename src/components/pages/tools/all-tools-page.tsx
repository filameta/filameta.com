import { Link, To } from "react-router-dom";

export function AllToolsPage() {
    return (
        <div className="container">
            <h1 className="text-4xl mt-6">All Tools and Calculators</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                <ToolCard
                    title="Filament Density Calculator"
                    description="Calculate unknown filament densities with a scale and math."
                    link="filament-density-calculator" />
            </div>
        </div>
    )
}

export type ToolCardProp = {
    title: string;
    description: string;
    link: To;
}

function ToolCard({ title, description, link }: ToolCardProp) {
    return (
        <Link to={link} className="border rounded-lg p-6 prose hover:bg-gray-100 active:bg-gray-200">
            <h2 className="text-xl font-light mb-1">{title}</h2>
            <p className="prose py-0">{description}</p>
        </Link>
    )
}
