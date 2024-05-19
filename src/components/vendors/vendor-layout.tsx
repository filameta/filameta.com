import DocCardList from "@site/src/theme/DocCardList";
import Heading from "@theme/Heading";
import { ReactNode } from "react";
import { useVendorContext } from "./vendor-context-provider";

export function VendorLayout({ children }: { children: ReactNode }) {

    const { vendorLogo, name } = useVendorContext();

    return (
        <>
            <Heading as="h1">{name}</Heading>

            {children}

            <Heading as="h2" className="mt-6">Company Details</Heading>

            {!!vendorLogo && <img src={vendorLogo} alt={name} className="max-w-32" />}

            <Heading as="h2" className="mt-6">Filaments</Heading>
            <DocCardList />
        </>
    )
}
