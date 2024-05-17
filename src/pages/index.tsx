import HappyFox from "../../static/theme/happy-fox.svg";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import SearchBar from "@theme/SearchBar";
import clsx from "clsx";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("", styles.heroBanner)}>
      <div className="container">
        <HappyFox title="Happy fox." style={{ height: "300px", maxWidth: "100%" }} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/filaments">
            Explore Filaments
          </Link>
        </div>
        <p className={clsx("", styles.subTitle)}>And Fila the fox says hi!</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={"Hello there!"}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
