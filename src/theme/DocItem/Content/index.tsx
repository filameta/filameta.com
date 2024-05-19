import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import { FilametaLayout } from "@site/src/components/filameta-layout";
import React from "react";
import type { WrapperProps } from "@docusaurus/types";
import { useFilametaDocContext } from "@site/src/utilities/use-filameta-doc-context";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): JSX.Element {
  const context = useFilametaDocContext();
  return context
    ? (
      <FilametaLayout context={context}>
        <Content {...props} />
      </FilametaLayout>
    )
    : <Content {...props} />
}

