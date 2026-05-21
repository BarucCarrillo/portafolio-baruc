import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import { folder_icon } from '../../data/img-data';
import './index.scss'

export const Index = () => {

    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [isOpenWorks, setIsOpenWorks] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);
    const [isOpenResume, setIsOpenResume] = useState(false);

    const handleOpenProfile = () => {
        setIsOpenProfile(true);
    }

    const handleOpenWorks = () => {
        setIsOpenWorks(true);
    }

    const handleOpenContact = () => {
        setIsOpenContact(true);
    }

    const handleOpenResume = () => {
        setIsOpenResume(true);
    }

    return (
        <section className='index-container'>
            <div className="index-left-container">
                <div className="index-left-profile" onClick={handleOpenProfile}>
                    <img src={folder_icon.url} alt="" />
                    <p>profile</p>
                </div>
                <div className="index-left-works" onClick={handleOpenWorks}>
                    <img src={folder_icon.url} alt="" />
                    <p>works</p>
                </div>
            </div>
            <div className='index-title-container'>
                <h1 className="index-title">PORTAFOLIO</h1>
                <h2>Baruc Carrillo</h2>
            </div>
            <div className="index-right-container">
                <div className="index-right-contact" onClick={handleOpenContact}>
                    <img src={folder_icon.url} alt="" />
                    <p>contact</p>
                </div>
                <div className="index-right-resume" onClick={handleOpenResume}>
                    <img src={folder_icon.url} alt="" />
                    <p>resume</p>
                </div>
            </div>

            <Modal 
                isOpen={isOpenProfile}
                onClose={() => setIsOpenProfile(false)}
                title='C:\BARUC\profile'
                children={
                    <>
                        <h1>hola</h1>
                    </>
                }
            />

            <Modal 
                isOpen={isOpenWorks}
                onClose={() => setIsOpenWorks(false)}
                title='C:\BARUC\works'
                children={
                    <>
                        <h1>hola</h1>
                    </>
                }
            />

            <Modal 
                isOpen={isOpenContact}
                onClose={() => setIsOpenContact(false)}
                title='C:\BARUC\contact'
                children={
                    <>
                        <h1>hola</h1>
                    </>
                }
            />

            <Modal 
                isOpen={isOpenResume}
                onClose={() => setIsOpenResume(false)}
                title='C:\BARUC\resume'
                children={
                    <>
                        <h1>hola</h1>
                    </>
                }
            />
        </section>
    );
}