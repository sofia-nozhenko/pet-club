import {Hero} from "@/components/sections/hero";
import {contactPageData} from "@/lib/data";
import {ContactForm} from "@/components/sections/contact-form";
import contactImg from "../../../public/images/contact-img.png";
import {Breadcrumbs} from "@/components/ui/breadcrumbs";
import {MapIframe} from "@/components/sections/map";

export default function Page() {
    return (
        <>
            <Hero {...contactPageData.hero} img={contactImg}/>
            <Breadcrumbs/>
            <MapIframe/>
            <ContactForm {...contactPageData.contact}/>
        </>
    );
};