import { ReactNode, createContext, useContext, useMemo, useState } from "react";

import { VendorDocContext } from "@site/src/utilities/use-filameta-doc-context";
import { useDoc } from "@site/src/utilities/internal-exports";

export type ContextProps = {
    readonly name: string;
    readonly vendorLogo?: string;
    readonly setVendorLogo: React.Dispatch<React.SetStateAction<string>>;
} & VendorDocContext;

const Context = createContext<ContextProps>(undefined);

export function VendorContextProvider({ context, children }: { context: VendorDocContext, children: ReactNode; }) {

    const { metadata: { title } } = useDoc();

    const [vendorLogo, setVendorLogo] = useState<string>();

    const mergedContext = useMemo<ContextProps>(() => {
        return {
            ...context,
            name: title,
            vendorLogo,
            setVendorLogo
        }
    }, [context, title, vendorLogo]);

    return (
        <Context.Provider value={mergedContext}>
            {children}
        </Context.Provider>
    )
}

export function useVendorContext(): ContextProps {
    const context = useContext(Context);
    if (context == null) {
        throw "Vendor context cannot be used outside of a vendor page.";
    }
    return context;
}
