import { FaChevronLeft } from "react-icons/fa6";
import { Link, useOutlet } from "react-router-dom";
import { useRouteTitle } from "@/components/hooks/use-route-title";
import { Button } from "@/lib/ui/button";

export function ToolLayout() {
    const title = useRouteTitle();

    const outlet = useOutlet();
    return (
        <div className="container pt-6">
            <header className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
                <Link to="/tools">
                    <Button variant="outline">
                        <FaChevronLeft className="me-2" />
                        Back to Tools
                    </Button>
                </Link>
                <h1 className="text-4xl">{title}</h1>
            </header>
            <article className="flex flex-col xl:flex-row pt-6">
                {outlet}
            </article>
        </div>
    );
}
