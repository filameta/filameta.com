import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration, useLocation, useMatches, useOutlet } from "react-router-dom";
import { RouteContextProps } from "../../pages/router";
import { umami } from "./umami";

export function RootLayout() {

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

    const title = useMemo(
        () => {
            if (!routeContext?.title) {
                console.warn("No title was set, defaulting to the default title.");
            }
            return routeContext?.title ? `${routeContext.title} | Filameta` : "Filameta";
        },
        [routeContext?.title]
    );
    const { pathname } = useLocation();

    const outlet = useOutlet();

    useEffect(() => {
        umami.trackPageView(x => ({ ...x, title, url: pathname }));
    }, [title, pathname])

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
            </Helmet>
            <ScrollRestoration />
            {outlet}
        </>
    )
}
