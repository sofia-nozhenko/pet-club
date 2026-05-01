"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Словник для перекладу сегментів шляху
const routeLabels = {
    "about": "Про нас",
    "services": "Послуги",
    "community": "Спільнота",
    "contact": "Контакти",
};

export const Breadcrumbs = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter((segment) => segment !== "");

    return (
        <nav aria-label="Breadcrumb" className="pb-6 md:pb-10">
            <div className="container">
                <ol className="flex items-center gap-2 text-sm md:text-base  font-medium">
                    <li>
                        <Link href="/" className="hover:text-orange-500 transition-colors">
                            Головна
                        </Link>
                    </li>

                    {pathSegments.map((segment, index) => {
                        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathSegments.length - 1;
                        const label = routeLabels[segment] || segment;

                        return (
                            <li key={href} className="flex items-center gap-2">
                                <span className="text-gray-300">/</span>

                                {isLast ? (
                                    <span className="text-orange-500 font-semibold capitalize">
                                        {label}
                                    </span>
                                ) : (
                                    <Link
                                        href={href}
                                        className="hover:text-orange-500 transition-colors capitalize"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};