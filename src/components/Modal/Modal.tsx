import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useModal } from '../../hooks/useModal';
import type { ReactNode } from 'react';
import './modal.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {

    const modalRef = useModal(isOpen, onClose);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay">
            <div ref={modalRef} className="modal-box">
                
                <div className="modal-header">
                    {title && <h3 className="modal-title">{title}</h3>}
                    <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
                        <X size={20} />
                    </button>
                </div>

                <div className="modal-content">
                    {children}
                </div>

            </div>
        </div>,
        document.body
    );
}
