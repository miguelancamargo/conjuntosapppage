import { Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PoliticaPrivacidad() {
    const navigate = useNavigate();

    return (
        <div className="animate-in" style={{ maxWidth: '1000px', margin: '100px auto 60px', padding: '0 1.5rem' }}>
            <button
                onClick={() => navigate(-1)}
                className="btn btn-outline btn-sm"
                style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
                <ArrowLeft size={16} /> Volver
            </button>

            <div className="card" style={{ padding: '3rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', color: 'var(--accent-blue)' }}>
                    <Shield size={48} />
                    <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800 }}>Política de Privacidad</h1>
                </div>

                <div className="privacy-content" style={{ lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem' }}>
                    <h2 style={{ color: '#fff', fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem' }}>Política de Tratamiento de Datos Personales (ConjuntosApp)</h2>

                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Identificación del Responsable y Encargado</h3>
                    <p>
                        ConjuntosApp actúa como Encargado del Tratamiento de los datos personales suministrados por los Copropietarios, Residentes, Visitantes y Administradores. El Responsable del Tratamiento es el Conjunto Residencial / Propiedad Horizontal que contrata o se suscribe al servicio, quien recolecta los datos para fines de administración y convivencia.
                    </p>

                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Datos Recolectados</h3>
                    <p>A través del aplicativo, se recolectan y procesan los siguientes datos:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Identificación:</strong> Nombres, apellidos, tipo y número de documento, correo electrónico, teléfono.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Residencia:</strong> Torre, unidad (apartamento/casa), rol dentro del conjunto (propietario/residente/portero).</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Vehículos:</strong> Placa, marca, color y tipo de vehículo.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Financieros:</strong> Historial de pagos de administración, conceptos de cobro y estados de cartera.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Seguridad:</strong> Registros de entrada/salida de visitantes, códigos QR de acceso y minutas de portería.</li>
                    </ul>

                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Finalidades del Tratamiento</h3>
                    <p>Los datos serán utilizados para las siguientes finalidades necesarias para el funcionamiento del aplicativo:</p>
                    <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li style={{ marginBottom: '0.75rem' }}><strong>Gestión Administrativa:</strong> Registro de residentes, control de pagos de cuotas de administración y generación de estados de cuenta.</li>
                        <li style={{ marginBottom: '0.75rem' }}><strong>Seguridad y Control:</strong> Validación de acceso de visitantes mediante códigos QR y registro de novedades en minutas de portería.</li>
                        <li style={{ marginBottom: '0.75rem' }}><strong>Convivencia:</strong> Gestión de PQRS (Peticiones, Quejas, Reclamos y Sugerencias), anuncios informativos y reservas de zonas comunes.</li>
                        <li style={{ marginBottom: '0.75rem' }}><strong>Democracia Interna:</strong> Realización de encuestas y votaciones virtuales.</li>
                        <li style={{ marginBottom: '0.75rem' }}><strong>Publicidad (Solo para Convenio Comercial):</strong> En los conjuntos acogidos al "Acuerdo Comercial", se realizará el tratamiento de datos para la visualización de pauta publicitaria discreta relacionada con planes de internet y telecomunicaciones. <em style={{ fontSize: '0.9rem' }}>Nota: Los planes de suscripción pagada están exentos de esta finalidad publicitaria.</em></li>
                    </ol>

                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.75rem' }}>Derechos de los Titulares</h3>
                    <p>Conforme a la Ley 1581 de 2012, usted tiene derecho a:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>Conocer, actualizar y rectificar sus datos personales.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Solicitar prueba de la autorización otorgada.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Ser informado respecto al uso que se le ha dado a sus datos.</li>
                        <li style={{ marginBottom: '0.5rem' }}>Revocar la autorización o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías constitucionales.</li>
                    </ul>
                </div>

                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', fontSize: '0.9rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                    © {new Date().getFullYear()} ConjuntosApp - Todos los derechos reservados
                </div>
            </div>
        </div>
    );
}
