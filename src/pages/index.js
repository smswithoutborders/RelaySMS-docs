import React from "react";
import clsx from "clsx";
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

        <h1 className={styles.heroTitle} aria-label="Smswithoutborders Projects >> Documentation">
          <Translate>Smswithoutborders Projects &gt;&gt; Documentation</Translate>
        </h1>

        <p className={styles.heroSubtitle} aria-label="Stay Connected">
          <Translate>Stay Connected</Translate>
        </p>

        <div className={styles.buttonRow}>
          <Link
            className={clsx("button", styles.mainButton)}
            to="/docs/iOS Tutorial/Getting-Started-With-iOS"
          >
            <Translate>Get Started with iOS</Translate>
          </Link>
          <Link
            className={clsx("button", styles.mainButton)}
            to="/docs/Android Tutorial/Getting-Started-With-Android"
          >
            <Translate>Get Started with Android</Translate>
          </Link>
        </div>

        <div className={styles.buttonRow}>
          <Link
            className={clsx("button", styles.mainButton)}
            to="/docs/Troubleshooting/Troubleshooting-FAQ"
          >
            <Translate>Troubleshooting Guide</Translate>
          </Link>
          <Link
            className={clsx("button", styles.mainButton)}
            to="/docs/Technical Documentation/Coming-Soon"
          >
            <Translate>Technical Docs</Translate>
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
      title={siteConfig.title}
      description="RelaySMS Developer Documentation Portal"
    >
      <HomepageHeader />
    </Layout>
  );
}
