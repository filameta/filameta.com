import { useDoc } from "./internal-exports";
import { useMemo } from "react";
import { useNearestDocCategory } from "./use-nearest-doc-category";

export function useFilametaDocContext(): FilametaDocContext | null {

    const doc = useDoc();
    const category = useNearestDocCategory();

    return useMemo(() => {

        // console.log("Context", { doc, category });

        let frontMatter = doc.frontMatter as FilametaFrontMatter;
        if (frontMatter.kind == "filament") {
            const filament: FilamentDocContext = {
                kind: "filament",
                frontMatter: frontMatter,
                vendor: {
                    name: category.name,
                    href: category.href
                }
            }
            return filament;
        } else if (frontMatter.kind == "vendor") {
            return {
                kind: "vendor",
                frontMatter: frontMatter
            }
        }

        return null;
    }, [category, doc])
}

export type FilametaDocContext =
    | VendorDocContext
    | FilamentDocContext;

export type VendorDocContext = {
    readonly kind: "vendor"
    readonly frontMatter: VendorFrontMatter;
}

export type FilamentDocContext = {
    readonly kind: "filament";
    readonly frontMatter: FilamentFrontMatter;
    readonly vendor: {
        readonly name: string;
        readonly href: string;
    }
}

type FilametaFrontMatter =
    | VendorFrontMatter
    | FilamentFrontMatter;

type VendorFrontMatter = {
    readonly kind: "vendor";
    readonly website?: string;
    readonly physicalAddress?: string;
}

type FilamentFrontMatter = {
    readonly kind: "filament";
}
