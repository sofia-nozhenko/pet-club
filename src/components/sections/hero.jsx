import Image from "next/image"
import heroBg from "../../../public/images/hero-bg.png";
import {Button} from "../ui/button";

export const Hero = (props) => {
    const {title, subtitle, description, btn, img} = props;
    return (
        <section className={'mb-6 lg:mb-10 pt-20 pb-10 lg:pt-40 lg:pb-0 items-center justify-end flex bg-gray-500 relative'}>
            <Image className={'hidden absolute top-0 left-1/2 -translate-x-1/2 w-full h-full object-cover max-w-360'} src={heroBg} alt={'Bird'}
                   loading={'eager'}/>
            <div className="container ">
                <div className={'flex flex-col-reverse lg:flex-row text-center lg:text-left items-center justify-center lg:justify-between gap-5 lg:gap-10 relative z-1'}>
                    <div className={'max-w-[68ch] flex flex-col gap-3 lg:gap-5 items-center lg:items-start'}>
                        <span className={'text-orange-500 capitalize font-bold'}>{subtitle}</span>
                        <h1 className={'text-4xl lg:text-[54px] font-bold lg:leading-15'}>{title}</h1>
                        <p className={'pb-6'}>{description}</p>
                        <Button label={btn}/>
                    </div>
                    <div className={'max-w-134 w-full h-auto relative'}>
                        <Image loading={'eager'} className={'object-contain max-w-134 w-full h-auto'} src={img} alt={'Hero'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};