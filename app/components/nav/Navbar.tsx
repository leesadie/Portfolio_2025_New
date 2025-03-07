'use client';

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed z-10 top-0 left-0 w-full flex flex-row md:justify-between gap-2 items-center py-4 md:px-10 bg-white text-zinc-800">
            {/* Left */}
            <div className="flex md:space-x-4 md:text-base text-sm">
                <NavItem href="/" currentPage={pathname}>Work</NavItem>
                <NavItem href="/about" currentPage={pathname}>About</NavItem>
                <NavItem href="/lab" currentPage={pathname}>Lab</NavItem>
            </div>

            {/* Right */}
            <div className="flex md:space-x-10 md:text-base text-sm">
                <NavItem href="https://github.com/leesadie" external>Github</NavItem>
                <NavItem href="https://www.linkedin.com/in/leesadie/" external>LinkedIn</NavItem>
                <NavItem href="mailto:leesadie025@gmail.com" external>Email</NavItem>
            </div>
        </nav>
    );
}

export default Navbar;