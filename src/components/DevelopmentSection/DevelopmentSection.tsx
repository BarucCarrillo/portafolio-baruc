import { Animator } from '../Animator';
import './DevelopmentSection.scss';

interface DevelopmentSectionProps {
    url: string,
    img: string,
    title: string,
    description: string
}

export const DevelopmentSection = ({ url, img, title, description }: DevelopmentSectionProps) => {
    return (
        <div className='development-section'>
            <Animator className="img-project" animation='slideRight' delay={3} duration={1}>
                <img src={img} alt="" />
            </Animator>
            <Animator className="info-project" animation='slideUp' delay={3} duration={1}>
                <h2><a href={url} target='_blank' rel="noopener noreferrer">{title}</a></h2>
                <p>{description}</p>
            </Animator>
        </div>
    )
}