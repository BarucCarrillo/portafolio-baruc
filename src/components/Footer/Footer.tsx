import { email_icon, github_icon, linkedin_icon, phone_icon } from '../../data/img-data';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-sm-container">
                <a
                    href="https://linkedin.com/in/baruccarrillo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="Ir a mi perfil de LinkedIn"
                >
                    <img src={linkedin_icon.url} alt={linkedin_icon.alt} />
                </a>

                <a
                    href="tel:+123456789"
                    className="footer-link"
                    aria-label="Llamar por teléfono"
                >
                    <img src={phone_icon.url} alt={phone_icon.alt} />
                </a>

                <a
                    href="https://github.com/BarucCarrillo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="Ir a mi perfil de GitHub"
                >
                    <img src={github_icon.url} alt={github_icon.alt}/>
                </a>

                <a
                    href="mailto:baruccarrillo@outlook.com"
                    className="footer-link"
                    aria-label="Enviar un correo electrónico"
                >
                    <img src={email_icon.url} alt={email_icon.alt} />
                </a>
            </div>
        </footer>
    );
};