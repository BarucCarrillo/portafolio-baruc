import { useState } from "react";
import './ResumeSelector.scss';

type TabOption = 'R_1' | 'R_2';

export const ResumeSelector = () => {
    const [activeTab, setActiveTab] = useState<TabOption>('R_1');

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                <button
                    className={`tab-btn ${activeTab === 'R_1' ? 'tab-btn--active' : ''}`}
                    onClick={() => setActiveTab('R_1')}>
                    English
                </button>
                <button
                    className={`tab-btn ${activeTab === 'R_2' ? 'tab-btn--active' : ''}`}
                    onClick={() => setActiveTab('R_2')} >
                    Spanish
                </button>
            </div>

            <div className="tabs-content">
                {
                    activeTab === 'R_1' && (
                        <div className="tab-panel">
                            <div className="pdf-container">
                                <iframe
                                    src="/assets/r_1.pdf#navpanes=0&view=FitH"
                                    title="CV English"
                                    className="pdf-viewer"
                                />
                            </div>
                            <a href="/assets/r_1.pdf" target="_blank" rel="noopener noreferrer" className="pdf-download-link">
                                Can't view the PDF? Open or download it here
                            </a>
                        </div>
                    )
                }
                {
                    activeTab === 'R_2' && (
                        <div className="tab-panel">
                            <div className="pdf-container">
                                <iframe
                                    src="/assets/r_2.pdf#navpanes=0&view=FitH"
                                    title="CV Spanish"
                                    className="pdf-viewer"
                                />
                            </div>
                            <a href="/assets/cv-espanol.pdf" target="_blank" rel="noopener noreferrer" className="pdf-download-link">
                                Can't view the PDF? Open or download it here
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}