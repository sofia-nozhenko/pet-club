import {Button} from "../ui/button";
import {ClockIcon, MailIcon, MapPinIcon, PhoneIcon} from "../ui/icons";

export const ContactForm = (props) => {
    const {title, description, form, links} = props;

    const icons = {
        address: <MapPinIcon/>,
        email: <MailIcon/>,
        phone: <PhoneIcon/>,
        clock: <ClockIcon/>
    };

    return (
        <section className={'pb-10 lg:pb-25'}>
            <div className={'container'}>
                <div className={'flex flex-col-reverse lg:flex-row gap-10 xl:gap-27.5'}>
                    <form className={'lg:w-1/2 flex flex-col gap-4 lg:gap-6 p-4 pt-6 lg:p-10 rounded-3xl bg-gray-500'}>
                        <label htmlFor="first-name" className={'flex flex-col gap-1.5'}>
                            <span>{form.firstName}</span>
                            <input className={'bg-white rounded-md h-10 flex items-center justify-center px-4'}
                                   id={'first-name'} type="text" required placeholder={form.placeholders.firstName}/>
                        </label>
                        <label htmlFor="last-name" className={'flex flex-col gap-1.5'}>
                            <span>{form.lastName}</span>
                            <input className={'bg-white rounded-md h-10 flex items-center justify-center px-4'}
                                   id={'last-name'} type="text" required placeholder={form.placeholders.lastName}/>
                        </label>
                        <label htmlFor="email" className={'flex flex-col gap-1.5'}>
                            <span>{form.email}</span>
                            <input className={'bg-white rounded-md h-10 flex items-center justify-center px-4'}
                                   id={'email'} type="email" required placeholder={form.placeholders.email}/>
                        </label>
                        <label htmlFor="message" className={'flex flex-col gap-1.5'}>
                            <span>{form.message}</span>
                            <textarea
                                className={'bg-white resize-none rounded-md min-h-38 pt-2.5 flex items-center justify-center px-4'}
                                id={'message'} placeholder={form.placeholders.message}/>
                        </label>
                        <Button classes={'mt-5 secondary w-full! sm:w-fit!'} label={form.btn}/>
                    </form>

                    <div className={'lg:w-1/2'}>
                        <h2 className={'text-3xl lg:text-[40px] leading-12 pb-2 lg:pb-4'}>{title}</h2>
                        <p className={'pb-6'}>{description}</p>
                        <div className={'flex flex-col gap-6'}>
                            {links.map((link) => (
                                <a key={link.id} href={link.href} className={'flex items-center gap-2.5 '}>
                                    <div className={'text-white flex items-center w-10 h-10 bg-orange-500 rounded-full justify-center'}>
                                        {icons[link.type]}
                                    </div>
                                    <span className={'font-bold'}>{link.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};