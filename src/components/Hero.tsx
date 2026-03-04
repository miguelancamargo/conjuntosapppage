import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="inicio">
            <div className="hero-bg" />
            <div className="hero-grid" />

            <div className="hero-badge">
                <span className="dot" />
                La plataforma #1 para conjuntos residenciales
            </div>

            <h1>
                Gestiona tu conjunto<br />
                <span className="gradient-text">de forma inteligente</span>
            </h1>

            <p>
                PQRS, parqueaderos, pagos, reservas, encuestas, control de visitantes con QR y mucho más.
                Todo en una sola app para administradores y residentes.
            </p>

            <div className="hero-actions">
                <button className="btn btn-primary btn-lg" onClick={() => scrollTo('precios')}>
                    Ver Planes y Precios
                </button>
                <button className="btn btn-ghost btn-lg" onClick={() => navigate('/preguntas-frecuentes')}>
                    Preguntas Frecuentes
                </button>
            </div>

            <div className="hero-stats">
                <div className="hero-stat">
                    <span className="value">100+</span>
                    <span className="label">Unidades gestionadas</span>
                </div>
                <div className="hero-divider" />
                <div className="hero-stat">
                    <span className="value">10+</span>
                    <span className="label">Módulos integrados</span>
                </div>
                <div className="hero-divider" />
                <div className="hero-stat">
                    <span className="value">$120k</span>
                    <span className="label">Desde / mes</span>
                </div>
            </div>
        </section>
    );
}
