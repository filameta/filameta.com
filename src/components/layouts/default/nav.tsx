import { useEffect, useState } from "react";
import { FaGithub, FaRegLightbulb } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { TbMenu2, TbTools } from "react-icons/tb";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ExternalLink } from "@/components/utilities/external-link";
import { Drawer, DrawerContent, DrawerOverlay, DrawerPortal, DrawerTrigger } from "@/lib/ui/drawer";

export function Nav() {

    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();
    useEffect(() => setOpen(false), [pathname]);

    return (
        <div className="fixed w-full bg-white/60 backdrop-blur-xl select-none z-20 border-b">
            <nav className="container flex mt-6 mb-3 px-6 items-center" role="banner">
                <div className="flex items-center">
                    <Link to="/" className="h-8 flex items-center text-lg font-semibold">
                        <img className="w-8 h-8 me-3" src={new URL("../../../assets/theme/logo.webp", import.meta.url).toString()} height="64" width="64" aria-hidden />
                        Filameta
                    </Link>
                </div>
                <ul className="list-none font-semibold items-end text-gray-950 hidden md:flex ms-auto">
                    <NavItems />
                </ul>

                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger className="ms-auto block md:hidden p-3 -m-3 hover:bg-slate-200 border border-transparent hover:border-black rounded-md">
                        <TbMenu2 className="h-6 w-6 ms-auto" />
                    </DrawerTrigger>

                    <DrawerPortal>
                        <DrawerContent className="flex flex-col items-center grow">
                            <ul className="list-none p-6">
                                <li className="flex items-center">
                                    <GoHome className="me-2" />
                                    <NavLink to="/" className="link link-hover">Home</NavLink>
                                </li>
                                <NavItems />
                            </ul>
                        </DrawerContent>
                        <DrawerOverlay />
                    </DrawerPortal>
                </Drawer>
            </nav>
        </div>
    )
}

function NavItems() {
    return (
        <>
            <li className="md:ms-6 flex items-center">
                <TbTools className="me-2" />
                <NavLink to="/tools/" className="link link-hover">All Tools and Calculators</NavLink>
            </li>
            <li className="md:ms-6 flex items-center">
                <FaGithub className="me-2" />
                <ExternalLink to="https://github.com/filameta/filameta.com" className="link link-hover">GitHub</ExternalLink>
            </li>
            <li className="md:ms-6 flex items-center">
                <FaRegLightbulb className="me-2" />
                <ExternalLink to="https://github.com/filameta/filameta.com/issues/new" className="link link-hover">Request a Tool</ExternalLink>
            </li>
        </>
    );
}
