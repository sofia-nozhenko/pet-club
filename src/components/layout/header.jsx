import Link from "next/link";
import Image from "next/image";
import {BurgerIcon, ChevronDown} from "@/components/ui/icons";

export default function Header() {
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

    return (
        <header className="mt-6 fixed top-0 left-0 right-0 z-50 w-full">
            <div className="max-w-330 w-full mx-auto px-4">
                <div
                    className="w-full py-2 lg:py-4 px-4 lg:px-8 bg-white rounded-full flex items-center justify-between shadow-[0_16px_12px_0_rgba(0,0,0,0.03)]">
                    <Link href="/">
                        <Image loading={"eager"} src="/images/logo.svg" alt={'Pet club logo'} width={108} height={64}/>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6 text-xl font-medium leading-7.5">
                        {navLinks.map((link) => (
                            <div key={link.id} className="relative group py-2">
                                <Link
                                    className="px-2.5 flex items-center gap-1 border-b-2 border-b-transparent transition-all duration-500 hover:text-orange-500 hover:border-b-orange-500"
                                    href={link.url}>
                                    {link.title}
                                    {link.submenu && (
                                        <ChevronDown className="w-6 h-6 transition-transform group-hover:rotate-180"/>
                                    )}
                                </Link>

                                {link.submenu && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
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
                    <button className={'lg:hidden'}><BurgerIcon/></button>
                </div>
            </div>
        </header>
    );
}