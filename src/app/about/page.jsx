import {Hero} from "../../components/sections/hero";
import {aboutPageData, contactPageData, homePageData} from "../../lib/data";
import aboutImg from "../../../public/images/about-img.png";
import {Video} from "../../components/sections/video";
import {ContactForm} from "../../components/sections/contact-form";
import {Breadcrumbs} from "../../components/ui/breadcrumbs";

export default function Page() {
    return (
        <>
            <Hero {...aboutPageData.hero} img={aboutImg}/>
            <Breadcrumbs/>
            <Video {...aboutPageData.video} />
            <ContactForm {...contactPageData.contact}/>
        </>
    );
};