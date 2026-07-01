import useEmblaCarousel from "embla-carousel-react";
import { DevelopmentSection } from "../DevelopmentSection/DevelopmentSection";
import "./DevelopmentCarousel.scss";
import { useCallback, useEffect, useState } from "react";

type Project = {
  img: string;
  title: string;
  description: string;
  url: string;
};

type DevelopmentCarouselProps = {
  projects: Project[];
};

export const DevelopmentCarousel = ({ projects }: DevelopmentCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="carousel">
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">
          {projects.map((project) => (
            <div className="carousel__slide" key={project.title}>
              <DevelopmentSection
                img={project.img}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__footer">
        <div className="carousel__dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel__dot ${index === selectedIndex ? "carousel__dot--active" : ""}`}
              onClick={() => scrollTo(index)}
              aria-label={`${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
