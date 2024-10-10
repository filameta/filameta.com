import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts/default/default-layout";
import { LandingPage } from "./landing/landing-page";
import { NotFoundPage } from "./not-found/not-found-page";
import { RootLayout } from "../layouts/root/root-layout";
import { FilamentDensityCalculatorPage } from "./tools/filament-desnity-calculator/filament-density-calculator-page";
import { AllToolsPage } from "./tools/all-tools-page";

function createRouter() {
    return createBrowserRouter([
        {
            element: <RootLayout />,
            children: [
                {
                    element: <DefaultLayout />,
                    children: [
                        {
                            element: <LandingPage />,
                            index: true,
                            handle: {
                                title: "Home",
                                description: "Tools and tips for FDM 3D-Printing. Say hello to Fila while you're here!"
                            } satisfies RouteContextProps
                        },
                        {
                            path: "/tools",
                            children: [
                                {
                                    index: true,
                                    element: <AllToolsPage />,
                                    handle: {
                                        title: "All Tools",
                                        description: "All available 3D-printing tools and calculators."
                                    } satisfies RouteContextProps
                                },
                                {
                                    path: "filament-density-calculator",
                                    element: <FilamentDensityCalculatorPage />,
                                    handle: {
                                        title: "Filament Density Calculator",
                                        description: "Calculate unknown filament densities with a scale and math."
                                    } satisfies RouteContextProps
                                }
                            ]
                        },
                        {
                            path: "*",
                            element: <NotFoundPage />,
                            handle: {
                                title: "Not Found",
                                description: "A 404 page."
                            } satisfies RouteContextProps
                        },
                    ]
                }
            ]
        }
    ])
}

export function Router() {
    const router = useMemo(createRouter, [createRouter]);
    return (
        <RouterProvider router={router} />
    )
}

export type RouteContextProps = {
    title?: string;
    description?: string;
}
