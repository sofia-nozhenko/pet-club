export const About = (props) => {
    const {title, description, list} = props;
    return (
        <section className={'pb-10 lg:pb-25'}>
            <div className="container">
                <h2 className={'text-3xl lg:text-[40px] leading-12 pb-2 lg:pb-10 text-center'}>{title}</h2>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 pb-6 lg:pb-12'}>
                    {description.map((paragraph, index) => (
                        <p key={index} className="text-gray-600">
                            {paragraph}
                        </p>
                    ))}
                </div>
                <ul className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10'}>
                    {list.map((item) => (
                        <li className={'flex flex-col'} key={item.id}>
                            <span className={'text-orange-500 text-[32px] font-bold'}>{item.value}</span>
                            <p>{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};