import { Banner } from "../../components/Banner/Banner";
import { ExperienceSection } from "./ExperienceSection/ExperienceSection";
import { MultimediaSection } from "./MultimediaSection/MultimediaSection";
import { ProjectSection } from "./ProjectSection/ProjectSection";

export const Index = () => {
    return(
        <section className=''>
            <Banner />
            <ExperienceSection />
            <MultimediaSection />
            <ProjectSection />
        </section>
    );
}