import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import SwobLogo from "../../static/logo-icon-light.png";
import Translate from "@docusaurus/Translate";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.gradientOverlay}></div>

      <div className={styles.heroInner}>
        <img
          src={SwobLogo}
          alt="Swob logo"
          className={styles.heroLogo}
          height={150}
          width={150}
        />

        <h1 className={styles.heroTitle}>
          <Translate>
            Smswithoutborders Projects &gt;&gt; Documentation
          </Translate>
        </h1>

        <p className={styles.heroSubtitle}>
          <Translate>Stay Connected</Translate>
        </p>

<div className={styles.dashboard}>

  <Link
    to="/docs/Gateway Clients Guide/GatewayClientsGuide"
    className={styles.featureCard}
  >
    <div className={styles.featureTitle}>Gateway Client</div>
    <div className={styles.featureDesc}>
      Run your own SMS gateway infrastructure
    </div>
  </Link>

 
  <div className={styles.smallGrid}>
    <Link to="/docs/iOS Tutorial/Getting-Started-With-iOS" className={styles.smallCard}>
      iOS Guide
    </Link>

    <Link to="/docs/Android Tutorial/Getting-Started-With-Android" className={styles.smallCard}>
      Android Guide
    </Link>

    <Link to="/docs/Troubleshooting/Troubleshooting-FAQ" className={styles.smallCard}>
      Troubleshooting
    </Link>

    <Link to="/docs/Technical Documentation/Coming-Soon" className={styles.smallCard}>
      Technical Docs
    </Link>
  </div>
</div>
     
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="RelaySMS Developer Documentation Portal"
    >
      <HomepageHeader />
    </Layout>
  );
}