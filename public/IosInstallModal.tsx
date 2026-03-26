import { X, Share, PlusSquare, Apple } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function IosInstallModal({ isOpen, onClose }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setIsVisible(false), 200);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} style={{ zIndex: 9999 }}>
      <div 
        className={`modal animate-in ${isOpen ? 'open' : ''}`} 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '420px', padding: '1.75rem' }}
      >
        <div className="modal-header" style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Apple size={24} />
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Instalar en iPhone / iPad</h3>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          ConjuntosApp funciona como una aplicación nativa en tu dispositivo Apple sin necesidad de la App Store. Sigue estos 3 pasos:
        </p>

        <div className="ios-steps">
          <div className="ios-step">
            <div className="ios-step-number">1</div>
            <div className="ios-step-content">
              <h4>Abre la app en Safari</h4>
              <p>Debes estar usando el navegador <strong>Safari</strong> (no funciona desde Chrome u otros navegadores en iOS).</p>
            </div>
          </div>

          <div className="ios-step">
            <div className="ios-step-number">2</div>
            <div className="ios-step-content">
              <h4>Toca el botón Compartir</h4>
              <p>Busca este ícono en la barra inferior (iPhone) o superior (iPad).</p>
              <div className="ios-icon-box">
                <Share size={20} color="#3b82f6" />
              </div>
            </div>
          </div>

          <div className="ios-step">
            <div className="ios-step-number">3</div>
            <div className="ios-step-content">
              <h4>Añadir a pantalla de inicio</h4>
              <p>Desliza el menú hacia arriba y selecciona esta opción, luego confirma.</p>
              <div className="ios-icon-box">
                <PlusSquare size={20} color="#10b981" />
                <span>Añadir a pantalla de inicio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer" style={{ marginTop: '1.5rem', borderTop: 'none', paddingTop: 0 }}>
          <button className="btn btn-primary" style={{ width: '100%' }} onClick={onClose}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
