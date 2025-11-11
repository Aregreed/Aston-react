import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

interface ModalComponent extends React.FC<ModalProps> {
    Header: React.FC<{ children: React.ReactNode }>;
    Body: React.FC<{ children: React.ReactNode }>;
    Footer: React.FC<{ children: React.ReactNode }>;
}

const Modal: ModalComponent = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={`${styles.modal} modal`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className={styles.header}>{children}</div>
);

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className={styles.body}>{children}</div>
);

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className={styles.footer}>{children}</div>
);

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;