import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Personal Blog Dimar Hanung <head />"
    >
      {/* <HomepageHeader /> */}
      <main
        style={{
          display: "grid",
          placeItems: "center",
          height: "calc(100vh - 300px)",
        }}
      >
        {/* <HomepageFeatures /> */}
        <div>
          <h2>Welcome to my personal Blog 👋</h2>
          <Link href="http://dimar-hanung.github.io/" target={"_self"}>
            {" "}
            <button
              className="button button--secondary"
              style={{ marginRight: "8px" }}
            >
              Go to Home Page
            </button>
          </Link>
          <Link to="/blog">
            <button className="button button--primary">Go to Blog</button>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
