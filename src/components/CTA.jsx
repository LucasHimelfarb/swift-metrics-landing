import styles from './CTA.module.css';

const CTA = () => (
  <section className={styles.wrapper} id="early-access">
    <div>
      <p className={styles.kicker}>CTA Final</p>
      <h2>Empezá a ver tus eventos en tiempo real sin configurar nada más.</h2>
      <p className={styles.copy}>
        Pedí acceso anticipado y conectá el SDK a tu app React Native. El dashboard Live Event Stream ya está listo para escuchar tus eventos.
      </p>
    </div>
    <a className={styles.button} href="#early-access">
      Join Early Access
    </a>
  </section>
);

export default CTA;
