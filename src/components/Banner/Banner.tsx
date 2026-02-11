import { useTranslation } from 'react-i18next';
import './banner.scss'
import useMobile from '../../hooks/useMobile';

export const Banner = () => {

    const { t } = useTranslation();
    const { isMobile } = useMobile();

    return (
        <section className='section-banner'>
            {!isMobile ?
                <div className='banner-web'>
                </div>
                :
                <div banner-mobile>
                </div>
            }
        </section>
    );
}