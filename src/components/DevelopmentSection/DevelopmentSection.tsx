import './DevelopmentSection.scss';

interface DevelopmentSectionProps {
    url: string,
    img: string,
    title: string,
    description: string
}

export const DevelopmentSection = ({url, img, title, description}: DevelopmentSectionProps) => {
    return(
        <div className='development-section'>
            <div className="img-project">
                <img src={img} alt="" />
            </div>
            <div className="info-project">
                <h2><a href={url} target='blank'>{title}</a></h2>
                <p>{description}</p>
            </div>
        </div>
    )
}