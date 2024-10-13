import { useMemo } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { TbTools } from "react-icons/tb";
import { Link, To } from "react-router-dom";
import { ExternalLink } from "../../utilities/external-link";
import { getToolsRoutes } from "./all-tools-routes";

export function AllToolsPage() {

    const toolRoutes = useMemo(() => getToolsRoutes(), [getToolsRoutes]);

    return (
        <div className="container">
            <h1 className="text-4xl mt-6 flex items-center">
                <TbTools className="me-3" />
                All Tools and Calculators
            </h1>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-9 select-none">
                {toolRoutes.map(tool => (
                    <ToolCard
                        key={tool.path}
                        title={tool.handle.title}
                        description={tool.handle.description}
                        link={tool.path} />
                ))}
                <ExternalLink suppressIcon to="https://github.com/filameta/filameta.com/issues/new" className="border rounded-lg p-6 hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center space-x-6 shadow-sm">
                    <div className="flex flex-col">
                        <h2 className="text-xl mb-1 flex items-center">
                            Request a Tool!
                            <FaExternalLinkAlt aria-hidden className="ms-3 h-4 w-4" />
                        </h2>
                        <p className="prose py-0">Suggest a 3D-Printing tool/calculator that are useful to others and I'll try and make it.</p>
                    </div>
                    <FaChevronRight />
                </ExternalLink>
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
        <Link to={link} className="border rounded-lg p-6 hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center space-x-6 shadow-sm">
            <div className="flex flex-col">
                <h2 className="text-xl mb-1">{title}</h2>
                <p className="prose py-0">{description}</p>
            </div>
            <FaChevronRight />
        </Link>
    )
}
