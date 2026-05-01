import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: 'Клуб "Лапки"',
    description: "Спільнота щасливих хвостиків",
};

export default function RootLayout({children}) {
    return (
        <html
            lang="en"
            className={`${poppins.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
