import {Hero} from "@/components/sections/hero";
import {contactPageData, homePageData} from "@/lib/data";
import {About} from "@/components/sections/about";
import {Video} from "@/components/sections/video";
import Services from "@/components/sections/services";
import {ContactForm} from "@/components/sections/contact-form";
import heroImg from "../../public/images/hero-img.png";
import {Breadcrumbs} from "../components/ui/breadcrumbs";

export default function Home() {
    return (
        <>
            <Hero {...homePageData.hero} img={heroImg}/>
            <Services {...homePageData.services}/>
            <Video {...homePageData.video} />
            <About {...homePageData.about}/>
            <ContactForm {...contactPageData.contact}/>
        </>
    );
}
