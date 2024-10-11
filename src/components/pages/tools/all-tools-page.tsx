import { useMemo } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { TbTools } from "react-icons/tb";
import { Link, To } from "react-router-dom";
import { getToolsRoutes } from "./all-tools-routes";

export function AllToolsPage() {

    const toolRoutes = useMemo(() => getToolsRoutes(), [getToolsRoutes]);

    return (
        <div className="container">
            <h1 className="text-4xl mt-6 flex items-center">
                <TbTools className="me-3" />
                All Tools and Calculators
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-9">
                {toolRoutes.map(tool => (
                    <ToolCard
                        key={tool.path}
                        title={tool.handle.title}
                        description={tool.handle.description}
                        link={tool.path} />
                ))}
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
        <Link to={link} className="border rounded-lg p-6 hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center space-x-6">

            <div className="flex flex-col">
                <h2 className="text-xl font-light mb-1">{title}</h2>
                <p className="prose py-0">{description}</p>
            </div>

            <FaChevronRight />

        </Link>
    )
}
