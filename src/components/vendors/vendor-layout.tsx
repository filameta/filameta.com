import DocCardList from "@site/src/theme/DocCardList";
import Heading from "@theme/Heading";
import { ReactNode } from "react";
import { VendorDocContext } from "@site/src/utilities/use-filameta-doc-context";
import { useDoc } from "@site/src/utilities/internal-exports";

export function VendorLayout({ context, children }: { context: VendorDocContext, children: ReactNode }) {

    const { metadata: { title } } = useDoc();

    return (
        <>
            <Heading as="h1">{title}</Heading>

            {children}

            <Heading as="h2" className="mt-6">Filaments</Heading>
            <DocCardList />
        </>
    )
}
