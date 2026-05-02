"use client";
import {useState, useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";

export const ComingSoon = (props) => {
    const {title, accentTitle, backLinkText} = props;

    const [mounted, setMounted] = useState(false);
    const [fontSize, setFontSize] = useState(18);
    const [mouseData, setMouseData] = useState({x: 0, y: 0, key: ""});
    const [time, setTime] = useState("");
    const [countdown, setCountdown] = useState(60);
    const [sortOrder, setSortOrder] = useState('desc');
    const [browserInfo, setBrowserInfo] = useState("");
    const [pets, setPets] = useState([
        {id: 1, name: "Барон", height: 45},
        {id: 2, name: "Альф", height: 30},
        {id: 3, name: "Люсі", height: 35}
    ]);

    const pawRef = useRef(null);

    useEffect(() => {
        setMounted(true);
        setBrowserInfo(navigator.userAgent);

        const savedSize = document.cookie.split('; ').find(row => row.startsWith('fontSize='));
        if (savedSize) setFontSize(parseInt(savedSize.split('=')[1]));

        const intervalJump = setInterval(() => {
            if (pawRef.current) {
                pawRef.current.style.top = Math.random() * 70 + "vh";
                pawRef.current.style.left = Math.random() * 70 + "vw";
            }
        }, 1000);

        const intervalClock = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        const paragraphs = document.getElementsByTagName("p");
        for (let p of paragraphs) {
            p.setAttribute("style", "font-size: 15px;");
        }

        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);


        return () => {
            clearInterval(intervalJump);
            clearInterval(intervalClock);
            clearInterval(timer);
        };
    }, []);

    if (!mounted) return <section className="min-h-screen bg-gray-500"/>;

    const changeFontSize = (delta) => {
        const newSize = fontSize + delta;
        setFontSize(newSize);
        document.cookie = `fontSize=${newSize}; max-age=86400; path=/`;
    };

    const sortByHeight = () => {
        const newOrder = sortOrder === 'desc' ? 'asc' : 'desc';
        const sorted = [...pets].sort((a, b) => {
            return newOrder === 'desc' ? b.height - a.height : a.height - b.height;
        });
        setPets(sorted);
        setSortOrder(newOrder);
    };

    const renderCalendar = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const today = now.getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startingDay = firstDay === 0 ? 6 : firstDay - 1;
        let rows = [];
        let cells = [];

        for (let i = 0; i < startingDay; i++) {
            cells.push(<td key={`empty-${i}`} className="p-2 border border-gray-100"></td>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = day === today;
            cells.push(
                <td key={day}
                    className={`p-2 border border-gray-100 text-center ${isToday ? 'bg-orange-500 text-white font-bold rounded-lg' : ''}`}>
                    {day}
                </td>
            );
            if ((cells.length) % 7 === 0 || day === daysInMonth) {
                while (cells.length < 7 && day === daysInMonth) {
                    cells.push(<td key={`empty-end-${cells.length}`} className="p-2 border border-gray-100"></td>);
                }
                rows.push(<tr key={day}>{cells}</tr>);
                cells = [];
            }
        }
        return rows;
    };

    return (
        <section
            onMouseMove={(e) => setMouseData(prev => ({...prev, x: e.clientX, y: e.clientY}))}
            onKeyDown={(e) => setMouseData(prev => ({...prev, key: e.code}))}
            tabIndex="0"
            className="min-h-screen lg:min-h-[80vh] pb-10 pt-40 lg:pb-0 flex flex-col items-center bg-gray-500 relative overflow-hidden outline-none"
            style={{fontSize: `${fontSize}px`}}
        >
            <div className="container relative z-10 flex flex-col items-center gap-8">
                <div
                    className="lg:absolute top-0 right-0 font-mono text-orange-500 bg-white/80 p-2 rounded-lg shadow-sm">
                    {time}
                </div>

                <h1 className="text-4xl lg:text-[54px] max-w-[24ch] font-bold text-center">
                    {title.split(accentTitle)[0]}
                    <span className="text-orange-500">{accentTitle}</span>
                    {title.split(accentTitle)[1]}
                </h1>

                <p className="text-orange-600 font-bold animate-pulse">
                    Чекаємо на відкриття через: {countdown}с
                </p>

                <div className="flex gap-4 bg-white p-2 rounded-xl shadow-sm">
                    <button onClick={() => changeFontSize(2)}
                            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-orange-100 transition-colors font-bold">A
                        +
                    </button>
                    <button onClick={() => changeFontSize(-2)}
                            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-orange-100 transition-colors font-bold">A
                        -
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                        <h3 className="font-bold mb-4 italic">Наші майбутні мешканці:</h3>
                        <table className="w-full text-left">
                            <thead>
                            <tr className="border-b">
                                <th className="pb-2">Кличка</th>
                                <th className="pb-2 cursor-pointer text-orange-500 underline select-none"
                                    onClick={sortByHeight}>
                                    Зріст {sortOrder === 'desc' ? '↓' : '↑'}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {pets.map(pet => (
                                <tr key={pet.id}
                                    className="border-b last:border-0 hover:bg-orange-50 transition-colors">
                                    <td className="py-2">{pet.name}</td>
                                    <td className="py-2">{pet.height} см</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                        <h3 className="font-bold mb-4 text-center">Графік тренувань</h3>
                        <table className="w-full border-collapse">
                            <thead>
                            <tr>
                                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map(d => (
                                    <th key={d} className="p-2 text-xs text-gray-400 font-medium">{d}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody className="text-sm">
                            {renderCalendar()}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div
                    className="mt-10 p-5 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 text-sm shadow-inner text-center max-w-2xl">
                    <p className="font-medium mb-2">
                        Координати: <span className="text-orange-600">{mouseData.x}, {mouseData.y}</span> |
                        Клавіша: <span className="font-bold text-orange-600 uppercase">{mouseData.key || "—"}</span>
                    </p>
                    <p className="text-sm break-all leading-tight">
                        Браузер: {browserInfo}
                    </p>
                </div>

                <div className="mt-4">
                    <Link href="/" className="primary-btn">
                        {backLinkText}
                    </Link>
                </div>
            </div>

            <div ref={pawRef}
                 className="fixed opacity-10 pointer-events-none transition-all duration-1000 ease-in-out z-0">
                <Image src="/images/big-paw.svg" width={100} height={100} alt="paw"/>
            </div>
        </section>
    );
};