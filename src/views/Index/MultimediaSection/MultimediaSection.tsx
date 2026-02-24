import { CarouselText } from "../../../components/CarouselText/CarouselText";
import { ImgMultimedia } from "../../../components/ImgMultimedia/ImgMultimedia";

export const MultimediaSection = () => {
    return (
        <section className='section-multimedia-section'>
            <ImgMultimedia />
            <CarouselText />
            <ImgMultimedia />
        </section>
    );
}