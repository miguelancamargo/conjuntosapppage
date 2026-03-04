const features = [
    {
        emoji: '📋',
        title: 'PQRS y Gestión de Quejas',
        desc: 'Los residentes radicán peticiones, quejas, reclamos y solicitudes desde la app. La administración las gestiona y responde en tiempo real.',
    },
    {
        emoji: '🚗',
        title: 'Control de Parqueaderos',
        desc: 'Asignación y control de parqueaderos de residentes y visitantes. Registro completo de entradas y salidas.',
    },
    {
        emoji: '📖',
        title: 'Libro de Minutas',
        desc: 'Reemplaza el libro físico de portería. Los vigilantes registran novedades digitalmente con marca de tiempo.',
    },
    {
        emoji: '💰',
        title: 'Cuota de Administración',
        desc: 'Lleva el control de pagos de administración por unidad. Genera reportes de mora y estados de cuenta.',
    },
    {
        emoji: '🏛️',
        title: 'Reservas de Zonas Comunes',
        desc: 'Los residentes reservan el salón comunal, cancha, BBQ y más desde la app, sin llamadas ni malentendidos.',
    },
    {
        emoji: '📊',
        title: 'Encuestas y Votaciones',
        desc: 'Crea encuestas y votaciones para la comunidad. Obtén resultados en tiempo real y exporta las actas.',
    },
    {
        emoji: '🔐',
        title: 'Visitantes con Código QR',
        desc: 'Los residentes autorizan visitas y generan códigos QR de acceso. El vigilante escanea y verifica en segundos.',
    },
    {
        emoji: '👥',
        title: 'Directorio de Residentes',
        desc: 'Directorio completo con información de contacto de cada residente y unidad del conjunto.',
    },
    {
        emoji: '📢',
        title: 'Anuncios y Circulares',
        desc: 'Comunica novedades importantes a todos los residentes con notificaciones push y anuncios en la app.',
    },
];

export default function Features() {
    return (
        <section className="section features" id="funciones">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Funcionalidades</div>
                    <h2 className="section-title">
                        Todo lo que necesita<br />tu conjunto residencial
                    </h2>
                    <p className="section-subtitle">
                        Una plataforma completa para administradores, porteros y residentes.
                        Sin papeles, sin confusiones, sin llamadas innecesarias.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((f) => (
                        <div className="feature-card" key={f.title}>
                            <span className="feature-icon">{f.emoji}</span>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
