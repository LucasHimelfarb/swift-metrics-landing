import styles from './Features.module.css';

const featureList = [
  {
    title: 'SDK para React Native & Expo',
    copy: 'Un paquete liviano optimizado para React Native puro o proyectos Expo Managed.'
  },
  {
    title: 'Envío de eventos custom',
    copy: 'Define tus propios nombres de eventos y payloads. SwiftMetrics no fuerza esquemas rígidos.'
  },
  {
    title: 'Live Events Stream (dashboard web)',
    copy: 'Observá cada evento apenas sucede. Pensado para debugging y product analytics temprana.'
  },
  {
    title: 'Setup en 5 minutos',
    copy: 'Instalás, inicializás y ya podés hacer swift.track(). No requiere configuraciones extrañas.'
  },
  {
    title: 'Ligero, rápido y sin fricción',
    copy: 'Peso mínimo, dependencias reducidas y cero impacto en la performance de tu app.'
  }
];

const Features = () => (
  <section className={styles.wrapper} id="features">
    <div className={styles.header}>
      <p className={styles.kicker}>MVP real</p>
      <h2>Lo que ya está listo para usar.</h2>
      <p className={styles.copy}>Nada de funnels, IA o análisis avanzado todavía — eso se agregará más adelante.</p>
    </div>
    <div className={styles.grid}>
      {featureList.map((feature) => (
        <article key={feature.title} className={styles.card}>
          <h3>{feature.title}</h3>
          <p>{feature.copy}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Features;
