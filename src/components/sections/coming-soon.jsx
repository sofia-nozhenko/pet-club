import Link from "next/link";
import Image from "next/image";
import {Button} from "../ui/button";

export const ComingSoon = (props) => {
    const {title, accentTitle, description, formTitle, inputPlaceholder, btnLabel, backLinkText} = props;

    const parts = title.split(accentTitle);

    return (
        <section className="min-h-screen lg:min-h-[80vh] pt-20 pb-10 lg:pt-40 lg:pb-0 items-center justify-end flex bg-gray-500 relative overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-60"/>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-60"/>

            <div className="container relative z-1">
                <div className="mx-auto max-w-[80ch] flex flex-col gap-2 lg:gap-4 items-center text-center">
                    <div className="inline-flex p-4 bg-orange-50 rounded-4xl animate-bounce">
                        <span className="text-4xl">🚧</span>
                    </div>
                    <h1 className="text-4xl lg:text-[54px] font-bold lg:leading-15">
                        {parts[0]}
                        <span className="text-orange-500">{accentTitle}</span>
                        {parts[1]}
                    </h1>
                    <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto">
                        {description}
                    </p>
                    <div className="mx-auto">
                        <Link href="/"
                              className="primary-btn">
                            {backLinkText}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-10 opacity-5 rotate-12 hidden md:block">
                <Image src="/images/big-paw.svg" width={200} height={200} alt="paw"/>
            </div>
        </section>
    );
};