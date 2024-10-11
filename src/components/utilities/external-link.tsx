import clsx from "clsx";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link, LinkProps } from "react-router-dom";

export type ExternalLinkProps = {
    to: string;
    suppressIcon?: boolean;
} & Omit<LinkProps, "to"> & React.RefAttributes<HTMLAnchorElement>

export function ExternalLink({ to, suppressIcon, className, children, ...props }: ExternalLinkProps) {
    if (!to) {
        throw new Error("To must have a value.");
    }
    if (!to.startsWith("https://")) {
        throw new Error("To must start with https://.");
    }
    return (
        <Link to={to}
            target="_blank"
            rel="external noreferrer noopener"
            className={clsx(className, !suppressIcon && "inline-flex items-center")}
            {...props}>
            {children}
            {!suppressIcon && (
                <FaExternalLinkAlt aria-hidden className="ms-2 h-3 w-3" />
            )}
        </Link>
    )
}
