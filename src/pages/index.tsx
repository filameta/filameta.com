import HappyFox from "../../static/theme/happy-fox.webp";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="">
      <div className="container flex flex-col items-center">
        <img className="w-96 aspect-square" src={HappyFox} alt="Fila the fox" />
        <Heading as="h1" className="font-light text-5xl -mt-9">
          {siteConfig.title}
        </Heading>
        <p className="">{siteConfig.tagline}</p>
        <Link
          className="button button--primary button--lg mb-3"
          to="/filaments">
          View All Filaments
        </Link>
        <p className="">And <span className="underline decoration-brand-orange decoration-2">Fila</span> the fox says hi!</p>
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
