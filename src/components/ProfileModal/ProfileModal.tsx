import { Animator } from '../Animator';
import './ProfileModal.scss';

export const ProfileModal = () => {
    return (
        <div className='section-profile-modal'>
            <Animator animation='slideUp' delay={0.6} duration={1}>
                <div className="left-content-profile">
                    <img src="https://placehold.co/200x200" alt="" />
                </div>
            </Animator>
            <Animator animation='scaleUp' delay={0.6} duration={1}>
                <div className='right-content-profile'>
                    <p>hi! i'm</p>
                    <h2>Baruc Carrillo</h2>
                    <p>I´M A SOFTWARE ENGINEER</p>
                </div>
            </Animator>
        </div>
    );
}