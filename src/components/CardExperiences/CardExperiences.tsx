import './card-experiences.scss'

interface CardExperiencesProps {
    name: string;
    desc: string;
    tech: string;
    img?: string;
}

export const CardExperiences = ({ name = '', desc = '', tech = '', img = 'https://placehold.co/300' }: CardExperiencesProps) => {
    return (
        <article className='section-card-experiences'>
            <div className="cards-container">
                <img src={img} alt={`${name} logo`} className='card-img' />
                <div className="txt-container">
                    <h3>{name}</h3>
                    <p dangerouslySetInnerHTML={{__html : desc}}/>
                    <p>{tech}</p>
                </div>
            </div>
        </article>
    );
}