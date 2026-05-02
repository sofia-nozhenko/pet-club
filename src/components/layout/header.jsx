'use client'

import Link from "next/link";
import Image from "next/image";
import {BurgerIcon, CloseIcon, ChevronDown} from "../ui/icons";
import {useState} from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenuId, setOpenSubmenuId] = useState(null);

    const navLinks = [
        {id: 1, url: '/about', title: 'Про нас'},
        {
            id: 2,
            url: '/community',
            title: 'Спільнота',
            submenu: [
                {id: 21, url: '/community/events', title: 'Календар подій'},
                {id: 22, url: '/community/gallery', title: 'Галерея'},
                {id: 23, url: '/community/members', title: 'Учасники клубу'},
            ]
        },
        {id: 3, url: '/contact', title: 'Контакти'}
    ];

    const toggleSubmenu = (id) => {
        setOpenSubmenuId(openSubmenuId === id ? null : id);
    };

    const closeAllMenus = () => {
        setIsMenuOpen(false);
        setOpenSubmenuId(null);
    };

    return (
        <header className="mt-6 fixed top-0 left-0 right-0 z-50 w-full">
            <div className="max-w-330 w-full mx-auto px-4 relative">

                <div
                    className={`${
                        !isMenuOpen ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'
                    } top-full mt-2 bg-white rounded-4xl p-6 absolute w-[calc(100%-2rem)] left-4 shadow-2xl transition-all duration-300 lg:hidden z-40`}
                >
                    <nav className="flex flex-col gap-2 text-lg font-medium">
                        {navLinks.map((link) => (
                            <div key={link.id}>
                                <div className="flex items-center justify-between py-3">
                                    <Link
                                        href={link.url}
                                        onClick={closeAllMenus}
                                        className="grow hover:text-orange-500 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                    {link.submenu && (
                                        <button
                                            onClick={() => toggleSubmenu(link.id)}
                                            className="p-2"
                                        >
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform duration-300 ${openSubmenuId === link.id ? 'rotate-180' : ''}`}/>
                                        </button>
                                    )}
                                </div>
                                {link.submenu && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                            openSubmenuId === link.id ? 'max-h-75 opacity-100 mb-4' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="flex flex-col gap-3 pl-4 border-l-2 border-orange-200 mt-2">
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.id}
                                                    href={sub.url}
                                                    onClick={closeAllMenus}
                                                    className="text-gray-600 hover:text-orange-500 py-1"
                                                >
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                <div
                    className="w-full py-2 lg:py-4 px-4 lg:px-8 bg-white rounded-full flex items-center justify-between shadow-lg relative z-50">
                    <Link href="/" onClick={closeAllMenus}>
                        <Image src="/images/logo.svg" alt="Logo" width={108} height={64} priority/>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6 text-xl font-medium">
                        {navLinks.map((link) => (
                            <div key={link.id} className="relative group py-2">
                                <Link
                                    className="px-2.5 flex items-center gap-1 border-b-2 border-b-transparent transition-all duration-500 hover:text-orange-500 hover:border-b-orange-500"
                                    href={link.url}
                                >
                                    {link.title}
                                    {link.submenu && (
                                        <ChevronDown className="w-6 h-6 transition-transform group-hover:rotate-180"/>
                                    )}
                                </Link>

                                {link.submenu && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                                        <div
                                            className="bg-white rounded-2xl shadow-xl border border-gray-50 overflow-hidden p-2">
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.id}
                                                    href={sub.url}
                                                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-xl transition-colors"
                                                >
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CloseIcon/> : <BurgerIcon/>}
                    </button>
                </div>
            </div>
        </header>
    );
}