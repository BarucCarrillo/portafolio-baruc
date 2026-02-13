import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './carousel-text.scss'; // Tu archivo de estilos (modificado abajo)

gsap.registerPlugin(ScrollTrigger);

const prueba = [
    "TEXTO 1", "TEXTO 2", "TEXTO 3", "TEXTO 4",
    "TEXTO 5", "TEXTO 6", "TEXTO 7", "TEXTO 8",
    "TEXTO 9", "TEXTO 10", "TEXTO 11"
];

export const CarouselText = () => {
    const componentRef = useRef<HTMLDivElement>(null); // Referencia al contenedor principal (Wrapper)
    const sliderRef = useRef<HTMLDivElement>(null);    // Referencia a la tira larga (Container)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (!sliderRef.current || !componentRef.current) return;

            // Calculamos cuánto se debe mover la tira
            // Total ancho del slider - ancho de la pantana
            const totalWidth = sliderRef.current.scrollWidth;
            const windowWidth = window.innerWidth;
            const amountToScroll = totalWidth - windowWidth;

            gsap.to(sliderRef.current, {
                x: -amountToScroll, // Movemos hacia la izquierda
                ease: "none", // Importante para que el scroll se sienta natural
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: "top top", // Empieza cuando el top del elemento toca el top de la ventana
                    end: `+=${amountToScroll}`, // La duración del scroll es igual al ancho del contenido
                    pin: true, // "Congela" el contenedor verticalmente mientras dura la animación
                    scrub: 1, // Suaviza la animación vinculándola al scroll (1 segundo de delay)
                    invalidateOnRefresh: true, // Recalcula si cambias el tamaño de ventana
                    markers: true // Descomenta esto si necesitas depurar
                }
            });

        }, componentRef); // Scope para limpieza automática

        return () => ctx.revert(); // Limpieza al desmontar
    }, []);

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