import { ReactNode, useMemo } from "react";

import { FilamentDocContext } from "@site/src/utilities/use-filameta-doc-context";
import { Heading } from "@site/src/utilities/theme-exports";
import Link from "@docusaurus/Link";
import { PageMetadata } from "@docusaurus/theme-common";
import { useDoc } from "@site/src/utilities/internal-exports";

export function FilamentLayout({ context, children }: { context: FilamentDocContext, children: ReactNode }) {

    const { metadata: { title } } = useDoc();
    const titleOverride = useMemo(() => `${context.vendor.name} ${title}`, [context, title]);

    return (
        <>
            <PageMetadata title={titleOverride} />

            <Link to={context.vendor.href}>
                <span className="badge badge-md">{context.vendor.name}</span>
            </Link>
            <Heading as="h1">{title}</Heading>
            {children}


        </>
    )
}
