import './header.scss'

export const Header = () => {
    return (
        <section className='section-header'>
            <div className="conatiner-header">
                <div className="left-content">
                    <img src="https://placehold.co/100" alt="logo" className="logo" />
                </div>
                <div className="right-content">
                    <a href="" className='txt-head'>Experiencias</a>
                    <a href="" className='txt-head'>Proyectos</a>
                    <a href="" className='txt-head'>Linkedin</a>
                    <a href="" className='txt-head'>GitHub</a>
                </div>
            </div>
        </section>
    );
}