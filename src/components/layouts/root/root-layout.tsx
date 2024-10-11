import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration, useLocation, useOutlet } from "react-router-dom";
import { useRouteDescription, useRouteTitle } from "@/components/hooks/use-route-title";
import { umami } from "./umami";

export function RootLayout() {

    const routeTitle = useRouteTitle();
    const routeDescription = useRouteDescription();
    const pageTitle = useMemo(
        () => {
            if (!routeTitle) {
                console.warn("No title was set, defaulting to the default title.");
            }
            return routeTitle ? `${routeTitle} | Filameta` : "Filameta";
        },
        [routeTitle]
    );
    const { pathname } = useLocation();

    const outlet = useOutlet();

    useEffect(() => {
        umami.trackPageView(x => ({ ...x, title: pageTitle, url: pathname }));
    }, [pageTitle, pathname])

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta property="og:title" content={pageTitle} />
                <meta property="description" content={routeDescription} />
                <meta property="og:description" content={routeDescription} />
            </Helmet>
            <ScrollRestoration />
            {outlet}
        </>
    )
}
