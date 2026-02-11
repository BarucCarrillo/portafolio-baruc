import { CardExperiences } from '../../../components/CardExperiences/CardExperiences';
import { experiencesData } from '../../../data/experiences-data';
import './experience-section.scss'

export const ExperienceSection = () => {
    return (
        <section className='section-experience-section'>
            <div className="head-container">
                <h2 className='title'>Mis Experiencias</h2>
                <p className='subtitle'>Proyectos realizados</p>
            </div>
            <div className="grid-container">
                {experiencesData.map((item) => (
                    <CardExperiences
                        key={item.id}
                        name={item.name}
                        desc={item.desc}
                        tech={item.tech}
                    />
                ))}
            </div>
        </section>
    );
}