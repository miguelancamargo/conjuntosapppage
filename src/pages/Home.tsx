import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Hero />
            <Features />
            <Pricing />

            {/* CTA Final */}
            <section className="cta-section">
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-label" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        ¿Listo para empezar?
                    </div>
                    <h2
                        className="section-title"
                        style={{ textAlign: 'center', marginBottom: '1rem', maxWidth: 520, margin: '0 auto 1rem' }}
                    >
                        Digitaliza tu conjunto hoy mismo
                    </h2>
                    <p
                        style={{
                            textAlign: 'center',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem',
                            maxWidth: 460,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        Escríbenos y te ayudamos a configurar todo. Sin costos de implementación.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <a
                            href="https://wa.me/573057650946?text=Hola!%20Quiero%20empezar%20con%20ConjuntosApp%20hoy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                        >
                            💬 Hablar con un agente
                        </a>
                        <a href="/preguntas-frecuentes" className="btn btn-outline btn-lg">
                            Ver FAQ
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
