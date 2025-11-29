import styles from './InstallCode.module.css';

const codeSnippet = `npm install @swiftmetrics/react-native
import SwiftMetrics from "@swiftmetrics/react-native";

SwiftMetrics.init("YOUR_APP_ID");
SwiftMetrics.track("checkout_started");`;

const InstallCode = () => (
  <section className={styles.wrapper} id="install">
    <div className={styles.content}>
      <p className={styles.kicker}>Instalación express</p>
      <h2>Agregalo a tu app y empezá a loguear en minutos.</h2>
      <p className={styles.copy}>
        SwiftMetrics se enfoca en el MVP real: SDK ligero, inicialización rápida y eventos visibles al instante en el dashboard.
      </p>
    </div>
    <pre className={styles.code}>
      <code>{codeSnippet}</code>
    </pre>
  </section>
);

export default InstallCode;
