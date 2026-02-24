import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prueba = [
    "TEXTO 1", "TEXTO 2", "TEXTO 3", "TEXTO 4",
    "TEXTO 5", "TEXTO 6", "TEXTO 7", "TEXTO 8",
    "TEXTO 9", "TEXTO 10", "TEXTO 11"
];

export const useCarouselText = () => {
    const componentRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (!sliderRef.current || !componentRef.current) return;

            const totalWidth = sliderRef.current.scrollWidth;
            const windowWidth = window.innerWidth;
            const amountToScroll = totalWidth - windowWidth;

            gsap.to(sliderRef.current, {
                x: -amountToScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: "center center",
                    end: `+=${amountToScroll}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    markers: true
                }
            });

        }, componentRef);

        return () => ctx.revert();
    }, []);
    return {
        prueba,
        componentRef,
        sliderRef
    }
}