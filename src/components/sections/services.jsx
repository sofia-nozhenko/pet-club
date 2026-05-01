import Image from "next/image";

export default function Services(props) {
    const {title, items} = props;
    return (
        <section className={'pb-10 lg:pb-25'}>
            <div className={'container'}>
                <h2 className={'text-3xl lg:text-[40px] leading-12 pb-2 lg:pb-10 text-center'}>{title}</h2>

                <ul className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
                    {items.map((item) => (
                        <li key={item.id} className={'flex flex-col items-start gap-4'}>
                            <div className={'relative w-full h-64 shrink-0'}>
                                <Image
                                    className={'rounded-xl object-cover'}
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={'flex flex-col gap-2'}>
                                <h3 className={'text-2xl font-semibold leading-8 text-gray-900'}>
                                    {item.title}
                                </h3>
                                <p className={'text-gray-600 text-lg'}>
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};