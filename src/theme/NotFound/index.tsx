import Layout from "@theme/Layout";
import NotFoundContent from "@theme/NotFound/Content";
import { PageMetadata } from "@docusaurus/theme-common";
import React from "react";
import { translate } from "@docusaurus/Translate";

export default function Index(): JSX.Element {
  const title = translate({
    id: "theme.NotFound.title",
    message: "Page Not Found",
  });
  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        <NotFoundContent />
      </Layout>
    </>
  );
}
