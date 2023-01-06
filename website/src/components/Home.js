import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../pages/index.module.css";

import CodeBlock from "@theme/CodeBlock";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="flex items-center">
          <div className="grid place-items-center">
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Get Started
            </Link>
          </div>
          <div className="w-1/3">
            <CodeBlock className="language-bash">{`npm i @reactui-org/core --save`}</CodeBlock>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
