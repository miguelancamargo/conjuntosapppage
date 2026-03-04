export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <h2>🏢 ConjuntosApp</h2>
                    <p>
                        La plataforma de gestión de conjuntos residenciales más completa de Colombia.
                        Simplifica la administración, mejora la convivencia.
                    </p>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
                        <a
                            href="https://wa.me/573057650946"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm"
                            style={{ background: 'rgba(37,211,102,0.1)', color: '#25d366', border: '1px solid rgba(37,211,102,0.3)' }}
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Producto</h4>
                    <ul>
                        <li><button onClick={() => scrollTo('funciones')}>Funcionalidades</button></li>
                        <li><button onClick={() => scrollTo('precios')}>Planes y Precios</button></li>
                        <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li>
                            <a href="https://wa.me/573057650946" target="_blank" rel="noopener noreferrer">
                                📞 +57 305 765 0946
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@conjuntosapp.co">
                                ✉️ info@conjuntosapp.co
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© {currentYear} ConjuntosApp. Todos los derechos reservados.</span>
                <span>ConjuntosApp® · Sin contratos ocultos</span>
            </div>
        </footer>
    );
}
