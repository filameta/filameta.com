import { ReactNode, useMemo } from "react";

import { FilamentLayout } from "./filaments/filament-layout";
import { FilametaDocContext } from "../utilities/use-filameta-doc-context";
import { VendorLayout } from "./vendors/vendor-layout";

export function FilametaLayout({ context, children }: { context: FilametaDocContext, children: ReactNode }) {

    useMemo(() => console.log("Filameta", context), [context]);

    if (context.kind == "filament") {
        return <FilamentLayout context={context}>{children}</FilamentLayout>;
    }

    if (context.kind == "vendor") {
        return <VendorLayout context={context}>{children}</VendorLayout>;
    }

    throw "Kind unknown."
}
