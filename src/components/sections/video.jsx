export const Video = (props) => {
    const {title, subtitle, videoSrc} = props;
    return (
        <section className="pb-10 md:pb-25 overflow-hidden">
            <div className="container">
                <div className="relative cursor-pointer overflow-hidden lg:rounded-[40px]">
                    <video
                        autoPlay muted loop playsInline
                        className="rounded-xl w-full h-full max-h-125 object-cover"
                    >
                        <source src={videoSrc} type="video/mp4"/>
                    </video>

                    <div
                        className="lg:absolute lg:inset-0 lg:bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end lg:p-4 lg:p-10">
                        <div className="lg:text-white">
                            <h2 className="text-3xl lg:text-[40px] leading-12 py-2 lg:py-4">{title}</h2>
                            <p className="max-w-[60ch] uppercase tracking-widest text-sm font-bold opacity-80">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};