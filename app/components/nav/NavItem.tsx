'use client';

import Link from "next/link";

interface NavItemProps {
    href: string;
    currentPage?: string;
    children: React.ReactNode;
    external?: boolean;
  }

const NavItem: React.FC<NavItemProps> = ({
    href,
    currentPage,
    children,
    external
}) => {
    const isActive = currentPage === href

    return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-neutral-900 text-base hover:opacity-50 cursor-pointer transition">
            {children}
        </a>
    ) : (
        <Link 
            href={href} 
            className={`
                transition
                ${isActive ? 'border border-black' : ''}
                ${isActive ? 'hover:bg-zinc-700 duration-200 ease-in' : 'bg-none'}
                ${isActive ? 'hover:text-zinc-200 duration-200 ease-in' : 'text-zinc-800'}
                ${isActive ? 'hover:opacity-100' : 'hover:opacity-50'}
                px-4 
                py-1 
                rounded-full
                text-base
                ease-out
                duration-300
                cursor-pointer
            `}
        >
            {children}
        </Link>
    )
}

export default NavItem;