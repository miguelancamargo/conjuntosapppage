// ============================================
// PLANES — ConjuntosApp (sincronizado con planes.ts del app)
// ============================================

import { useState } from 'react';
import PaymentModal from './PaymentModal';

interface Plan {
    key: string;
    nombre: string;
    descripcion: string;
    precioMensual: number;
    precioTotal: number;
    periodoMeses: number;
    maxUnidades: number;
    ahorroPct: number;
    esAcuerdoComercial: boolean;
    color: string;
    emoji: string;
    features: string[];
    popular?: boolean;
}

const PLANES: Record<string, Plan> = {
    mensual: {
        key: 'mensual',
        nombre: 'Plan Mensual',
        descripcion: 'Ideal para probar el sistema sin compromisos a largo plazo.',
        precioMensual: 150_000,
        precioTotal: 150_000,
        periodoMeses: 1,
        maxUnidades: 100,
        ahorroPct: 0,
        esAcuerdoComercial: false,
        color: '#3b82f6',
        emoji: '📅',
        features: [
            'Hasta 100 unidades de vivienda',
            'PQRS y gestión de residentes',
            'Parqueaderos y minutas de portería',
            'Pagos de administración',
            'Reservas de zonas comunes',
            'Encuestas y votaciones',
            'Módulo de visitantes QR',
            'Directorio de residentes',
            'Notificaciones en app',
            'Soporte por email',
        ],
    },
    trimestral: {
        key: 'trimestral',
        nombre: 'Plan Trimestral',
        descripcion: 'Ahorra un 13% pagando cada 3 meses.',
        precioMensual: 130_000,
        precioTotal: 390_000,
        periodoMeses: 3,
        maxUnidades: 100,
        ahorroPct: 13,
        esAcuerdoComercial: false,
        color: '#8b5cf6',
        emoji: '📆',
        features: [
            'Hasta 100 unidades de vivienda',
            'Todas las funciones del plan mensual',
            'Ahorro de $60.000 vs mensual',
            'Soporte prioritario',
        ],
    },
    anual: {
        key: 'anual',
        nombre: 'Plan Anual',
        descripcion: 'La mejor tarifa. Ahorra 20% pagando el año completo.',
        precioMensual: 120_000,
        precioTotal: 1_440_000,
        periodoMeses: 12,
        maxUnidades: 100,
        ahorroPct: 20,
        esAcuerdoComercial: false,
        color: '#10b981',
        emoji: '🗓️',
        popular: true,
        features: [
            'Hasta 100 unidades de vivienda',
            'Todas las funciones del plan mensual',
            'Ahorro de $360.000 vs mensual',
            'Soporte prioritario garantizado',
            'Acceso anticipado a nuevas funciones',
        ],
    },
    acuerdo_comercial: {
        key: 'acuerdo_comercial',
        nombre: 'Acuerdo Comercial',
        descripcion: 'App gratis para siempre a cambio de pauta publicitaria a tus residentes y permiso para poder hacer instalaciones de nuestros servicios de internet en tu conjunto.',
        precioMensual: 0,
        precioTotal: 0,
        periodoMeses: 0,
        maxUnidades: 0,
        ahorroPct: 100,
        esAcuerdoComercial: true,
        color: '#f59e0b',
        emoji: '🤝',
        features: [
            'Unidades ilimitadas',
            'Todas las funcionalidades incluidas',
            'Uso gratuito indefinido',
            'A cambio: permitir venta de planes de internet en tu conjunto',
            'Publicidad discreta de internet dentro de la app',
            'Tus residentes acceden a internet de alta velocidad',
        ],
    },
};

const formatCOP = (v: number) =>
    v === 0 ? 'Gratis' : new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(v);

const includedModules = [
    { emoji: '📋', label: 'PQRS y quejas' },
    { emoji: '🚗', label: 'Control de parqueaderos' },
    { emoji: '📖', label: 'Libro de minutas' },
    { emoji: '💰', label: 'Cuota de administración' },
    { emoji: '🏛️', label: 'Reservas de zonas comunes' },
    { emoji: '📊', label: 'Encuestas y votaciones' },
    { emoji: '🔐', label: 'Visitantes con QR' },
    { emoji: '👥', label: 'Directorio de residentes' },
    { emoji: '📢', label: 'Anuncios y circulares' },
    { emoji: '🔔', label: 'Notificaciones en app' },
];

function WaLink(plan: Plan) {
    return `https://wa.me/573057650946?text=Hola!%20Me%20interesa%20el%20${encodeURIComponent(plan.nombre)}%20de%20ConjuntosApp%2C%20%C2%BFc%C3%B3mo%20pago%3F`;
}

function CheckIcon({ color }: { color: string }) {
    return (
        <svg className="check-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="7" fill={color} fillOpacity="0.15" />
            <path d="M4 7l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function PlanCard({ plan, onBuy }: { plan: Plan; onBuy: (plan: Plan) => void }) {
    const priceLabel = plan.precioMensual === 0
        ? 'Gratis'
        : `$${(plan.precioMensual / 1000).toFixed(0)}k`;

    return (
        <div className={`plan-card ${plan.popular ? 'popular' : ''} ${plan.esAcuerdoComercial ? 'acuerdo' : ''}`}>
            {plan.popular && <div className="popular-badge">⭐ Más popular</div>}
            {plan.esAcuerdoComercial && <div className="acuerdo-badge">🤝 Acuerdo Especial</div>}

            <div className="plan-header">
                <span className="plan-emoji">{plan.emoji}</span>
                <div className="plan-name" style={{ color: plan.color }}>{plan.nombre}</div>
                <div className="plan-desc">{plan.descripcion}</div>
            </div>

            <div className="plan-price-box" style={{ background: `${plan.color}15` }}>
                {plan.precioMensual === 0 ? (
                    <span className="plan-price" style={{ color: plan.color }}>Gratis</span>
                ) : (
                    <>
                        <span className="plan-price" style={{ color: plan.color }}>
                            {priceLabel}
                            <span className="plan-price-period">/mes</span>
                        </span>
                        {plan.periodoMeses > 1 && (
                            <div className="plan-total">
                                Se cobra {formatCOP(plan.precioTotal)} cada {plan.periodoMeses} meses
                            </div>
                        )}
                        {plan.ahorroPct > 0 && (
                            <span
                                className="plan-savings-badge"
                                style={{ background: `${plan.color}25`, color: plan.color }}
                            >
                                Ahorra {plan.ahorroPct}%
                            </span>
                        )}
                    </>
                )}
                <div className="plan-units">
                    {plan.maxUnidades === 0 ? 'Unidades ilimitadas' : `Hasta ${plan.maxUnidades} unidades`}
                </div>
            </div>

            <ul className="plan-features">
                {plan.features.map((f) => (
                    <li key={f}>
                        <CheckIcon color={plan.color} />
                        {f}
                    </li>
                ))}
            </ul>

            <div className="plan-cta">
                <button
                    className="btn-comprar"
                    style={{ background: plan.color }}
                    onClick={() => onBuy(plan)}
                >
                    {plan.esAcuerdoComercial ? '🤝 Solicitar Acuerdo' : '🛒 Comprar'}
                </button>
                <a
                    href={WaLink(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por WhatsApp
                </a>
            </div>
        </div>
    );
}

export default function Pricing() {
    const planesOrden = [PLANES.mensual, PLANES.trimestral, PLANES.anual];
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

    const handleBuy = (plan: Plan) => {
        if (plan.esAcuerdoComercial) {
            const msg = `Hola! Me interesa el Acuerdo Comercial de ConjuntosApp. ¿Cómo funciona?`;
            window.open(`https://wa.me/573057650946?text=${encodeURIComponent(msg)}`, '_blank');
        } else {
            setSelectedPlan(plan);
        }
    };

    const priceLabel = (plan: Plan) =>
        plan.precioMensual === 0
            ? 'Gratis'
            : new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(plan.precioMensual) + '/mes';

    return (
        <section className="section pricing" id="precios">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Planes y Precios</div>
                    <h2 className="section-title">
                        Elige el plan que<br />más le conviene a tu conjunto
                    </h2>
                    <p className="section-subtitle">
                        Sin contratos ocultos. Sin letra pequeña. Cancela cuando quieras.
                    </p>
                </div>

                {/* Main plans */}
                <div className="pricing-grid">
                    {planesOrden.map((p) => (
                        <PlanCard key={p.key} plan={p} onBuy={handleBuy} />
                    ))}
                </div>

                {/* Large complexes link */}
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <a
                        href="https://wa.me/573057650946?text=Hola!%20Nuestro%20conjunto%20tiene%20m%C3%A1s%20de%20100%20unidades%20y%20quiero%20informaci%C3%B3n%20sobre%20ConjuntosApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.85rem',
                            color: 'var(--accent-blue)',
                            padding: '0.4rem 1rem',
                            borderRadius: '99px',
                            background: 'rgba(59,130,246,0.08)',
                            border: '1px solid rgba(59,130,246,0.2)',
                            fontWeight: 500,
                        }}
                    >
                        🏢 ¿Más de 100 unidades? <strong>Hablemos →</strong>
                    </a>
                </div>

                {/* Acuerdo comercial */}
                <div className="divider-text">¿No tienes presupuesto?</div>
                <div className="acuerdo-wrapper">
                    <PlanCard plan={PLANES.acuerdo_comercial} onBuy={handleBuy} />
                </div>

                {/* What's included */}
                <div style={{ marginTop: '4rem' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 700 }}>
                        ¿Qué incluye cualquier plan?
                    </h3>
                    <div className="included-grid">
                        {includedModules.map((m) => (
                            <div className="included-item" key={m.label}>
                                <span>{m.emoji}</span>
                                <span>{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal de pago */}
            {selectedPlan && (
                <PaymentModal
                    planNombre={selectedPlan.nombre}
                    planPrecio={priceLabel(selectedPlan)}
                    esAcuerdoComercial={selectedPlan.esAcuerdoComercial}
                    onClose={() => setSelectedPlan(null)}
                />
            )}
        </section>
    );
}
