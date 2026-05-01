export const MapIframe = () => {
    return (
        <section className="pb-qo md:pb-25">
            <div className="container">
                <div className="relative w-full h-112.5 overflow-hidden rounded-[40px] shadow-lg border border-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.502672837079!2d34.54975907692294!3d49.588269449066075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f5f527d444b%3A0xcff26c7de4531b98!2z0JrQvtGA0L_Rg9GB0L3Ri9C5INC_0LDRgNC6!5e0!3m2!1sru!2sua!4v1777659392302!5m2!1sru!2sua"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps - Корпусний парк"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};