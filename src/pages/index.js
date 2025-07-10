import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import SwobLogo from "../../static/logo-icon-light.png";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={clsx("container", styles.headerContainer)}>
  
        <img
          alt="Swob logo"
          className={styles.hero_img}
          src={SwobLogo}
          height={180}
          width={180}
        />

  
        <h1 className={styles.hero__title} aria-label="Smswithoutborders Projects >> Documentation">
          <Translate>Smswithoutborders Projects &gt;&gt; Documentation</Translate>
        </h1>
        
        <p className={styles.hero__subtitle} aria-label="Stay Connected">
          <Translate>Stay Connected</Translate>
        </p>

<div className={styles.buttonGroup}>
  <Link className={clsx("button", styles.heroButton)} to="docs">
    <Translate>Technical Documentation</Translate>
  </Link>
  <Link className={clsx("button", styles.heroButton)} to="docs/Android Tutorial/Getting-Started-With-Android">
    <Translate>Get Started with Android</Translate>
  </Link>
  <Link className={clsx("button", styles.heroButton)} to="docs/Troubleshooting/Troubleshooting-FAQ">
    <Translate>Troubleshooting Guide</Translate>
  </Link>
  <Link className={clsx("button", styles.heroButton)} to="/docs/iOS Tutorial/Getting-Started-With-iOS">
    <Translate>Get Started with iOS</Translate>
  </Link>
</div>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Smswithoutborders tutorial section"
    >
      <HomepageHeader />
    </Layout>
  );
}


