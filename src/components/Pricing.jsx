import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    price: 'USD 5/mes',
    tagline: 'Ideal para lanzar tu app',
    features: ['10k eventos', '1 app', 'Live Events Stream'],
    highlight: false
  },
  {
    name: 'Pro',
    price: 'USD 12/mes',
    tagline: 'Para equipos que shippean semanalmente',
    features: ['100k eventos', 'Live Events + endpoints adicionales (próximamente)', 'API de exportación'],
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'Integraciones y requisitos avanzados',
    features: ['Eventos ilimitados', 'SSO', 'Self-hosted'],
    highlight: false
  }
];

const Pricing = () => (
  <section className={styles.wrapper} id="pricing">
    <div className={styles.header}>
      <p className={styles.kicker}>Pricing</p>
      <h2>Planes simples para empezar a trackear hoy.</h2>
    </div>
    <div className={styles.grid}>
      {plans.map((plan) => (
        <article key={plan.name} className={`${styles.card} ${plan.highlight ? styles.highlight : ''}`}>
          <div>
            <p className={styles.planName}>{plan.name}</p>
            <p className={styles.price}>{plan.price}</p>
            <p className={styles.tagline}>{plan.tagline}</p>
          </div>
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <a href="#early-access" className={styles.button}>
            {plan.name === 'Enterprise' ? 'Contanos tu caso' : 'Join Early Access'}
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default Pricing;
