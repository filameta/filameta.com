import { useMemo } from "react";
import { useMatches } from "react-router-dom";
import { RouteContextProps } from "../pages/router";

export function useRouteTitle() {
    const routeContext = useRouteContext();
    return routeContext?.title;
}

export function useRouteDescription() {
    const routeContext = useRouteContext();
    return routeContext?.description;
}

export function useRouteContext() {
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
    return routeContext;
}
