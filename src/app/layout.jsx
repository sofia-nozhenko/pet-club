import {Comfortaa} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const poppins = Comfortaa({
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "The Paws Club — Спільнота Щасливих Хвостиків",
    description: "Найбільший клуб власників собак: навчання, прогулянки та підтримка кінологів.",
    keywords: ["собаки", "кінолог", "дресирування", "клуб власників собак", "Полтава"],
    authors: [{name: "Sofia", url: "https://github.com/sofiia-kykot"}],
    creator: "Sofia & Pet Club Team",
    publisher: "The Paws Club",
    robots: {
        index: true,
        follow: true,
        nocache: true,
    },
    openGraph: {
        title: "Якби собаки вміли говорити, вони б розповіли про нас!",
        description: "Приєднуйтесь до нашої зграї! Навчання та прогулянки з професіоналами.",
        url: "https://paws-club.com",
        siteName: "The Paws Club",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "The Paws Club Logo",
            },
        ],
        locale: "uk_UA",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export const viewport = {
    themeColor: "#FF8A00",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({children}) {
    return (
        <html
            lang="en"
            className={`${poppins.variable} h-full antialiased`}
            data-scroll-behavior={'smooth'}
        >
        <body className="min-h-full flex flex-col">
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
