import Link from "next/link";
import Image from "next/image";
import {FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon} from "../ui/icons";
import footerBg from "../../../public/images/footer-bg.png";
export default function Footer() {
    return (
        <footer className="relative py-9 lg:py-18">
            <Image className={'absolute top-0 left-0 object-cover w-full h-full -z-1'} loading={"eager"} src={footerBg} alt={'Pet club logo'} width={2880} height={664}/>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
                    <div className="flex flex-col gap-5 max-w-87.5">
                        <Link href="/">
                            <Image loading={"eager"} src="/images/logo.svg" alt={'Pet club logo'} width={108} height={64}/>
                        </Link>
                        <p>
                            Ми створюємо простір, де кожен власник знайде підтримку,
                            а кожен собака — справжніх друзів.
                        </p>
                        <ul className="flex items-center gap-5">
                            <li>
                                <a href="#" target="_blank"><FacebookIcon/></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><InstagramIcon/></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><TwitterIcon/></a>
                            </li>
                            <li>
                                <a href="#" target="_blank"><YoutubeIcon/></a>
                            </li>

                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 max-w-87.5">
                        <span className="leading-6 font-semibold">Клуб</span>
                        <ul className="flex flex-col gap-4">
                            <li><a href="#">Про нас</a></li>
                            <li><a href="#">Наша команда</a></li>
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">Вакансії</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 max-w-87.5">
                        <span className="leading-6 font-semibold">Корисне</span>
                        <ul className="flex flex-col gap-4">
                            <li><a href="#">Календар подій</a></li>
                            <li><a href="#">Поради кінолога</a></li>
                            <li><a href="#">Карта парків</a></li>
                            <li><a href="#">Наші партнери</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 max-w-87.5">
                        <span className="leading-6 font-semibold">Контакти</span>
                        <ul className="flex flex-col gap-4">
                            <li><a href="#">вул. Паркова, 12, Полтава, Україна</a></li>
                            <li><a href="#">+380 (99) 000-00-00</a></li>
                            <li><a href="#">hello@pawsclub.ua</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    );
};