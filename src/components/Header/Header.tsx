import { useState } from 'react';
import useMobile from '../../hooks/useMobile';
import './header.scss';

export const Header = () => {
    const { isMobile } = useMobile();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    // Función helper para cerrar menú al hacer click en un link
    const closeMenu = () => setIsOpen(false);

    return (
        <section className='section-header'>
            <div className="conatiner-header">
                <div className="left-content">
                    <img src="https://placehold.co/100" alt="logo" className="logo-header" />
                </div>

                {isMobile && (
                    <button 
                        className={`hamburger ${isOpen ? 'open' : ''}`} 
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                )}

                {/* CORRECCIÓN 2: Agregada la clase 'mobile' condicionalmente */}
                <nav className={`right-content ${isMobile ? 'mobile' : ''} ${isOpen ? 'nav-open' : ''}`}>
                    <a href="#" className='txt-head' onClick={closeMenu}>Experiencias</a>
                    <a href="#" className='txt-head' onClick={closeMenu}>Proyectos</a>
                    <a href="#" className='txt-head' onClick={closeMenu}>Linkedin</a>
                    <a href="#" className='txt-head' onClick={closeMenu}>GitHub</a>
                </nav>
            </div>
        </section>
    );
}