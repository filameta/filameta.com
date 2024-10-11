import { useMemo } from "react";

export function Footer() {
    const year = useMemo(() => new Date().getFullYear(), []);
    return (
        <footer className="p-6 flex flex-col items-center justify-end bg-gray-100 mt-auto text-center">
            <span>Built by Silvenga with Love in Texas, USA.</span>
            <span>
                Content licensed under <a className="link link-hover" href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="external">CC BY-SA 4.0</a>. Code licensed under the <a className="link link-hover" href="https://github.com/filameta/filameta.com/blob/master/LICENSE" target="_blank" rel="external">MIT License</a>.
            </span>
            <span>Copyright © {year}.</span>
        </footer>
    )
}
