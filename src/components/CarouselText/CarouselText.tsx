import './carousel-text.scss'; 
import { useCarouselText } from '../../hooks/useCarouselText';

export const CarouselText = () => {

    const { prueba, componentRef, sliderRef} = useCarouselText();

    return (
        <div className="section-carousel-text" ref={componentRef}>
            <div className="carousel-track" ref={sliderRef}>
                {prueba.map((texto, index) => (
                    <div key={index} className="carousel-card">
                        <p>{texto}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};