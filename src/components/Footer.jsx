import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.branding}>
        <img src="/images/logo-placeholder.svg" alt="SwiftMetrics logo" />
        <p>SDK de analytics móvil ultra simple para React Native y Expo.</p>
      </div>
      <div className={styles.links}>
        <a href="mailto:hola@swiftmetrics.app">hola@swiftmetrics.app</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
      <p className={styles.copy}>© {year} SwiftMetrics. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
