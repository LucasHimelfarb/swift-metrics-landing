import styles from './Hero.module.css';

const bullets = [
  'SDK super simple para enviar eventos desde React Native o React Native + Expo.',
  'Inmediato: tus eventos se muestran en la consola web en tiempo real.',
  'Setup en menos de 5 minutos.'
];

const liveEvents = [
  { name: 'checkout_started', meta: 'user_id=9283 · plan=Pro', time: 'ahora' },
  { name: 'session_started', meta: 'expo · iOS 18', time: 'hace 12s' },
  { name: 'screen_view', meta: 'Settings', time: 'hace 21s' },
  { name: 'tap', meta: 'CTA · Early Access', time: 'hace 32s' }
];

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <span className={styles.pill}>SwiftMetrics para React Native</span>
        <h1>Mobile analytics, but stupidly simple.</h1>
        <p className={styles.subtitle}>
          Un SDK liviano para React Native y React Native + Expo que te permite loguear eventos en segundos y verlos en un dashboard en tiempo real. Sin configuraciones eternas. Sin instalaciones pesadas.
        </p>
        <ul className={styles.bullets}>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <a className={styles.primary} href="#early-access">Join Early Access</a>
          <a className={styles.secondary} href="#" aria-label="View GitHub placeholder link">
            View GitHub
          </a>
        </div>
      </div>
      <div className={styles.mockup} aria-label="Live Event Stream mockup">
        <div className={styles.mockupHeader}>
          <div>
            <p className={styles.mockupTitle}>Live Event Stream</p>
            <p className={styles.mockupCaption}>Eventos llegando en tiempo real</p>
          </div>
          <span className={styles.status}>Online</span>
        </div>
        <ul className={styles.eventList}>
          {liveEvents.map((event) => (
            <li key={event.name + event.time}>
              <div>
                <p className={styles.eventName}>swift.track('{event.name}')</p>
                <p className={styles.eventMeta}>{event.meta}</p>
              </div>
              <span className={styles.eventTime}>{event.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
