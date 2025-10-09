'use client';

import { useEffect } from 'react';

interface VideoModalProps {
    videoUrl: string;
    onClose: () => void;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="box modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="card-content">
                        <button
                            onClick={onClose}
                            className="modal-close-button"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        <iframe
                            src={videoUrl}
                            className="modal-video aspect-video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
            </div>
        </div>
    );
}
