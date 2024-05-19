import { useEffect } from "react";
import { useVendorContext } from "./vendor-context-provider"

export type VendorLogoProps = {
    src: string
}

export function VendorLogo({ src }: VendorLogoProps) {

    const { setVendorLogo } = useVendorContext();

    useEffect(() => setVendorLogo(src), [setVendorLogo, src])

    return <></>
}
