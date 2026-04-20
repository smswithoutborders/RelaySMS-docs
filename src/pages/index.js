// import React from "react";
// import Link from "@docusaurus/Link";
// import Layout from "@theme/Layout";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import SwobLogo from "../../static/logo-icon-light.png";
// import Translate from "@docusaurus/Translate";
// import styles from "./index.module.css";

// function HomepageHeader() {
//   return (
//     <header className={styles.heroBanner}>
//       {/* <div className={styles.gradientOverlay}></div> */}

//       <div className={styles.heroInner}>
//         <img
//           src={SwobLogo}
//           alt="Swob logo"
//           className={styles.heroLogo}
//           height={150}
//           width={150}
//         />

//         <h1 className={styles.heroTitle}>
//           <Translate>
//             Smswithoutborders Projects &gt;&gt; Documentation
//           </Translate>
//         </h1>

//         <p className={styles.heroSubtitle}>
//           <Translate>Stay Connected</Translate>
//         </p>

// <div className={styles.dashboard}>

// <Link
//   to="/docs/Gateway Clients Guide/GatewayClientsGuide"
//   className={styles.featureCard}
// >
//   <div className={styles.featureTitle}>Gateway Clients Guide</div>
// <div className={styles.featureDesc}>
//   Set up and manage your SMS gateway
// </div>
// </Link>

// <div className={styles.smallGrid}>
//   <Link to="/docs/iOS Tutorial/Getting-Started-With-iOS" className={styles.smallCard}>
//     <div className={styles.smallTitle}>Get Started with iOS</div>
//     <div className={styles.smallDesc}>
//       Setup RelaySMS on iPhone
//     </div>
//   </Link>

//   <Link to="/docs/Android Tutorial/Getting-Started-With-Android" className={styles.smallCard}>
//     <div className={styles.smallTitle}>Get Started with Android</div>
//     <div className={styles.smallDesc}>
//       Setup RelaySMS on Android
//     </div>
//   </Link>

//   <Link to="/docs/Troubleshooting/Troubleshooting-FAQ" className={styles.smallCard}>
//     <div className={styles.smallTitle}>Troubleshooting Guide</div>
//     <div className={styles.smallDesc}>
//       Fix common issues
//     </div>
//   </Link>

//   <Link to="/docs/Technical Documentation/Coming-Soon" className={styles.smallCard}>
//     <div className={styles.smallTitle}>Technical Docs</div>
//     <div className={styles.smallDesc}>
//       APIs and system details
//     </div>
//   </Link>
// </div>

// </div>
     
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <Layout
//       title={siteConfig.title}
//       description="RelaySMS Developer Documentation Portal"
//     >
//       <HomepageHeader />
//     </Layout>
//   );
// }



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

      <div className={styles.heroInner}>
        <img
          src={SwobLogo}
          alt="Swob logo"
          className={styles.heroLogo}
          height={150}
          width={150}
        />

        {/* TITLE */}
        <h1 className={styles.heroTitle}>
          <Translate id="home.title">
            Smswithoutborders Projects -- Documentation
          </Translate>
        </h1>

        {/* SUBTITLE */}
        <p className={styles.heroSubtitle}>
          <Translate id="home.subtitle">
            Stay Connected
          </Translate>
        </p>

        <div className={styles.dashboard}>

          {/* FEATURE CARD */}
          <Link
            to="/docs/Gateway Clients Guide/GatewayClientsGuide"
            className={styles.featureCard}
          >
            <div className={styles.featureTitle}>
              <Translate id="home.gateway.title">
                Gateway Clients Guide
              </Translate>
            </div>

            <div className={styles.featureDesc}>
              <Translate id="home.gateway.desc">
                Set up and manage your SMS gateway
              </Translate>
            </div>
          </Link>

          {/* SMALL GRID */}
          <div className={styles.smallGrid}>

            <Link to="/docs/iOS Tutorial/Getting-Started-With-iOS" className={styles.smallCard}>
              <div className={styles.smallTitle}>
                <Translate id="home.ios.title">Get Started with iOS</Translate>
              </div>
              <div className={styles.smallDesc}>
                <Translate id="home.ios.desc">Setup RelaySMS on iPhone</Translate>
              </div>
            </Link>

            <Link to="/docs/Android Tutorial/Getting-Started-With-Android" className={styles.smallCard}>
              <div className={styles.smallTitle}>
                <Translate id="home.android.title">Get Started with Android</Translate>
              </div>
              <div className={styles.smallDesc}>
                <Translate id="home.android.desc">Setup RelaySMS on Android</Translate>
              </div>
            </Link>

            <Link to="/docs/Troubleshooting/Troubleshooting-FAQ" className={styles.smallCard}>
              <div className={styles.smallTitle}>
                <Translate id="home.troubleshoot.title">Troubleshooting Guide</Translate>
              </div>
              <div className={styles.smallDesc}>
                <Translate id="home.troubleshoot.desc">Fix common issues</Translate>
              </div>
            </Link>

            <Link to="/docs/Technical Documentation/Coming-Soon" className={styles.smallCard}>
              <div className={styles.smallTitle}>
                <Translate id="home.tech.title">Technical Docs</Translate>
              </div>
              <div className={styles.smallDesc}>
                <Translate id="home.tech.desc">APIs and system details</Translate>
              </div>
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
