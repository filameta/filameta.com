import { useDoc, useDocsSidebar } from "./internal-exports";

import { PropSidebarItem } from "@docusaurus/plugin-content-docs/lib/sidebars/types.js"
import { useMemo } from "react";

export function useNearestDocCategory() {
    const sidebar = useDocsSidebar();
    const mappings = useMemo(() => walkSidebarItems(sidebar.items), [sidebar.items])

    const doc = useDoc();
    const nearest = useMemo(() => {
        return mappings.find(x => x.doc.docId == doc.metadata.id)?.category;
    }, [doc.metadata.id, mappings])

    return nearest;
}

function walkSidebarItems(root: PropSidebarItem[], lastCategory?: Category): DocCategory[] {
    let mappings: DocCategory[] = [];
    for (let item of root) {

        if (item.type == "category") {
            const category = {
                name: item.label,
                href: item.href
            }
            mappings.push(...walkSidebarItems(item.items, category));
        } else if (item.type == "link" && !!lastCategory) {
            const doc: Doc = {
                docId: item.docId,
                label: item.label,
                href: item.href,
                unlisted: item.unlisted
            }
            mappings.push({
                category: lastCategory,
                doc: doc
            });
        }
    }
    return mappings;
}

export type DocCategory = {
    readonly doc: Doc;
    readonly category: Category;
}

type Doc = {
    readonly docId: string;
    readonly label: string;
    readonly href: string;
    readonly unlisted: boolean;
}

type Category = {
    readonly href: string;
    readonly name: string;
}
