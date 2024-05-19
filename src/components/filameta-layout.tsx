import { ReactNode, useMemo } from "react";

import { FilamentLayout } from "./filaments/filament-layout";
import { FilametaDocContext } from "../utilities/use-filameta-doc-context";
import { VendorContextProvider } from "./vendors/vendor-context-provider";
import { VendorLayout } from "./vendors/vendor-layout";

export function FilametaLayout({ context, children }: { context: FilametaDocContext, children: ReactNode }) {

    useMemo(() => console.log("Filameta", context), [context]);

    if (context.kind == "filament") {
        return (
            <FilamentLayout context={context}>{children}</FilamentLayout>
        );
    }

    if (context.kind == "vendor") {
        return (
            <VendorContextProvider context={context}>
                <VendorLayout>{children}</VendorLayout>
            </VendorContextProvider>
        )
    }

    throw "Kind unknown."
}
