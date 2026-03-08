import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar-logo" onClick={() => navigate('/')}>
                    🏢 ConjuntosApp
                </div>

                <ul className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
                    <li><button onClick={() => scrollTo('funciones')}>Funciones</button></li>
                    <li><button onClick={() => scrollTo('precios')}>Precios</button></li>
                    <li><Link to="/preguntas-frecuentes" onClick={() => setMobileOpen(false)}>FAQ</Link></li>
                    <li><Link to="/politica-privacidad" onClick={() => setMobileOpen(false)}>Privacidad</Link></li>
                    <li><a href="https://wa.me/573057650946" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>Contacto</a></li>
                </ul>

                <div className="navbar-cta">
                    <a
                        href="https://wa.me/573057650946?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20ConjuntosApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                    >
                        Contactar
                    </a>
                    <button className="btn btn-primary btn-sm" onClick={() => scrollTo('precios')}>
                        Ver Planes
                    </button>
                </div>

                <button
                    className="hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Menú"
                >
                    <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
                    <span style={{ opacity: mobileOpen ? 0 : 1 }} />
                    <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
                </button>
            </div>
        </nav>
    );
}
