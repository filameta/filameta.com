import { useMemo } from "react";
import { ExternalLink } from "@/components/utilities/external-link";

export function Footer() {
    const year = useMemo(() => new Date().getFullYear(), []);
    return (
        <footer className="p-6 flex flex-col items-center justify-end bg-gray-100 mt-auto text-center">
            <span>Built by <a className="link link-hover" href="https://silvenga.com" rel="me" target="_blank">Silvenga</a> with Love in Texas, USA.</span>
            <span>
                Content licensed under <ExternalLink className="link link-hover" to="https://creativecommons.org/licenses/by-sa/4.0/deed.en">CC BY-SA 4.0</ExternalLink>. Code licensed under the <ExternalLink className="link link-hover" to="https://github.com/filameta/filameta.com/blob/master/LICENSE">MIT License</ExternalLink>.
            </span>
            <span>Copyright © {year}.</span>
        </footer>
    )
}
