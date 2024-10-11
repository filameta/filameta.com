import { useMemo } from "react";
import { useMatches } from "react-router-dom";
import { RouteContextProps } from "../pages/router";

export function useRouteTitle() {
    const matches = useMatches();
    const routeContext = useMemo(() => {
        const routesWithContext = matches.filter(x => !!x.handle);
        if (routesWithContext.length > 1) {
            console.warn("Multiple matches with context were detected for the current route. This isn't supported.");
        }
        if (routesWithContext.length == 1) {
            return routesWithContext[0].handle as RouteContextProps;
        }
        return undefined;
    }, [matches]);
    return routeContext?.title;
}
