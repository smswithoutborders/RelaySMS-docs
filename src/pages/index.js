import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import clsx from "clsx";
import styles from "./index.module.css";

const sides = [
  {
    id: "android",
    label: "Android",
    to: "/docs/Android Tutorial/Getting-Started-With-Android",
  },
  {
    id: "ios",
    label: "iOS",
    to: "/docs/iOS Tutorial/Getting-Started-With-iOS",
  },
];

function Side({ id, label, to }) {
  return (
    <Link to={to} className={clsx(styles.side, styles[id])}>
      <span className={styles.label}>{label}</span>
      <span className={styles.cta}>
        <Translate id="homepage.chooser.cta">View tutorial</Translate>{" "}
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({ id: "homepage.chooser.title", message: "Choose your device" })}
      description={translate({
        id: "homepage.chooser.metaDescription",
        message: "RelaySMS tutorials for Android and iOS.",
      })}
    >
      <main className={styles.split}>
        {sides.map((s) => (
          <Side key={s.id} {...s} />
        ))}
      </main>
    </Layout>
  );
}
