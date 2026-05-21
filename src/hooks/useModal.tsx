import { useEffect, useRef } from 'react';

export const useModal = (isOpen: boolean, onClose: () => void) => {
    // Creamos una referencia que luego "pegaremos" a la caja blanca de nuestro modal
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Si el modal está cerrado, no necesitamos escuchar nada
        if (!isOpen) return;

        // 1. Lógica para la tecla Escape
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        // 2. Lógica para el clic afuera
        const handleClickOutside = (event: MouseEvent) => {
            // Si la caja del modal existe Y el elemento clickeado NO está dentro de ella...
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose(); // ...cerramos el modal
            }
        };

        // Activamos los escuchadores (listeners)
        document.addEventListener('keydown', handleKeyDown);
        // Usamos mousedown en lugar de click para que se sienta más rápido
        document.addEventListener('mousedown', handleClickOutside);

        // Bloqueamos el scroll del fondo
        document.body.style.overflow = 'hidden';

        // Función de limpieza (Cleanup): Removemos todo al cerrar el modal
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Retornamos la referencia para que el componente la pueda usar
    return modalRef;
};