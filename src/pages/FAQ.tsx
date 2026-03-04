import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const faqs = [
    {
        q: '¿Qué es ConjuntosApp?',
        a: 'ConjuntosApp es una plataforma digital diseñada específicamente para la gestión de conjuntos residenciales en Colombia. Permite a administradores, porteros y residentes manejar PQRS, parqueaderos, pagos, reservas, visitantes y mucho más desde una sola aplicación.',
    },
    {
        q: '¿Cuánto cuesta y cómo se paga?',
        a: 'Tenemos tres planes según la periodicidad: Mensual ($150.000/mes), Trimestral ($390.000 cada 3 meses, equivalente a $130.000/mes), y Anual ($1.440.000 al año, equivalente a $120.000/mes). También existe el Acuerdo Comercial, donde la app es gratuita a cambio de permitir la venta de planes de internet en el conjunto. Los pagos se realizan por MercadoPago o consultando directamente por WhatsApp.',
    },
    {
        q: '¿Cuántas unidades de vivienda puede tener mi conjunto?',
        a: 'Los planes estándar soportan hasta 100 unidades de vivienda. Si tu conjunto tiene más de 100 unidades, contáctanos directamente por WhatsApp para diseñar un plan personalizado. El Plan Acuerdo Comercial no tiene límite de unidades.',
    },
    {
        q: '¿Qué módulos incluye la aplicación?',
        a: 'La aplicación incluye: PQRS y gestión de quejas, control de parqueaderos, libro de minutas digital, cuota de administración, reservas de zonas comunes, encuestas y votaciones, código QR para visitantes, directorio de residentes, anuncios y circulares, y notificaciones push.',
    },
    {
        q: '¿Cómo funciona el módulo de visitantes con QR?',
        a: 'El residente ingresa los datos de su visita en la app y genera un código QR único con vigencia temporal. Cuando el visitante llega, el vigilante de portería escanea el QR desde su panel y el sistema lo verifica en segundos, sin necesidad de llamar al apartamento.',
    },
    {
        q: '¿Qué es el Acuerdo Comercial?',
        a: 'Es una modalidad especial donde ConjuntosApp es completamente gratuita para el conjunto residencial. A cambio, el conjunto permite que ofrezcamos planes de internet de alta velocidad a los residentes que lo deseen. Los residentes no están obligados a contratar, es completamente voluntario. La publicidad es discreta y dentro de la app.',
    },
    {
        q: '¿Cómo se configura la aplicación por primera vez?',
        a: 'Una vez que contratas, te asignamos un asesor que te guía paso a paso en la configuración inicial: registro de unidades, residentes, zonas comunes y más. El proceso normalmente toma entre 1 y 3 días hábiles dependiendo del tamaño del conjunto.',
    },
    {
        q: '¿Pueden usarla los residentes desde el celular?',
        a: 'Sí. ConjuntosApp funciona como aplicación web progresiva (PWA), lo que significa que los residentes pueden acceder desde cualquier celular con internet, sin necesidad de descargar nada de la tienda de aplicaciones. Solo ingresan al enlace y la agregan a su pantalla de inicio.',
    },
    {
        q: '¿Qué pasa si cancelo el plan?',
        a: 'Puedes cancelar en cualquier momento sin penalidades. Si ya pagaste por un período, tendrás acceso hasta que ese período termine. Al vencer, el sistema se suspende. Tus datos quedan guardados por 30 días adicionales por si decides reactivar.',
    },
    {
        q: '¿Qué soporte ofrecen?',
        a: 'Todos los planes incluyen soporte por email y WhatsApp. Los planes Trimestral y Anual tienen soporte prioritario con tiempos de respuesta garantizados. El Plan Anual también incluye acceso anticipado a nuevas funcionalidades.',
    },
    {
        q: '¿La app funciona sin internet?',
        a: 'La aplicación requiere conexión a internet para sus funciones principales. Sin embargo, algunas vistas pueden cargar datos en caché. Se recomienda que el conjunto tenga una conexión estable en portería para el uso del vigilante.',
    },
    {
        q: '¿Cómo contacto al soporte técnico?',
        a: 'Por WhatsApp al +57 305 765 0946 o por email a info@conjuntosapp.co. El horario de atención es de lunes a sábado de 8:00 am a 6:00 pm. Para urgencias fuera de horario, puedes dejar un mensaje y te respondemos a la brevedad.',
    },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item ${open ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setOpen(!open)}>
                {q}
                <svg className="faq-chevron" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <div className={`faq-answer ${open ? 'open' : ''}`}>
                <div className="faq-answer-inner">{a}</div>
            </div>
        </div>
    );
}

export default function FAQ() {
    return (
        <>
            <div className="faq-page">
                <div className="faq-header">
                    <div className="section-label" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
                        Soporte
                    </div>
                    <h1 className="section-title">Preguntas Frecuentes</h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.7 }}>
                        Todo lo que necesitas saber sobre ConjuntosApp.
                        ¿No encuentras tu respuesta?{' '}
                        <a
                            href="https://wa.me/573057650946"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Escríbenos por WhatsApp
                        </a>
                        .
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((f) => (
                        <FaqItem key={f.q} q={f.q} a={f.a} />
                    ))}
                </div>

                <div className="faq-cta" style={{ marginTop: '3rem' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💬</div>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>¿Aún tienes dudas?</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                        Nuestro equipo está listo para asesorarte sin ningún compromiso.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href="https://wa.me/573057650946?text=Hola!%20Tengo%20una%20pregunta%20sobre%20ConjuntosApp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Hablar por WhatsApp
                        </a>
                        <Link to="/" className="btn btn-outline">
                            ← Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
