import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <img src="/images/logo-placeholder.svg" alt="SwiftMetrics logo placeholder" className={styles.logo} />
        <span className={styles.brand}>SwiftMetrics</span>
      </div>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#early-access">Early Access</a>
      </nav>
      <a className={styles.cta} href="#early-access">Join Early Access</a>
    </header>
  );
};

export default Header;
