import styles from './Benefits.module.css';

const benefits = [
  {
    title: 'Zero-config setup',
    copy: 'Instalás el SDK, inicializás SwiftMetrics y listo. Captura instantánea de tus eventos.'
  },
  {
    title: 'Eventos custom ultra simples',
    copy: "Una sola línea: swift.track('checkout_started'). Nada más."
  },
  {
    title: 'Eventos en tiempo real',
    copy: 'Ve lo que sucede en tu app al instante. Cada tap, cada pantalla y cada acción aparece en la consola sin delays.'
  }
];

const Benefits = () => (
  <section className={styles.wrapper} id="why">
    <p className={styles.kicker}>Why SwiftMetrics</p>
    <h2>Construido para equipos que no quieren perder tiempo configurando analytics.</h2>
    <div className={styles.grid}>
      {benefits.map((benefit) => (
        <article key={benefit.title} className={styles.card}>
          <div className={styles.icon} aria-hidden="true" />
          <h3>{benefit.title}</h3>
          <p>{benefit.copy}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Benefits;
