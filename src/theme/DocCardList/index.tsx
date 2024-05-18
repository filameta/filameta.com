import DocCardList from "@theme-original/DocCardList";
import type DocCardListType from "@theme/DocCardList";
import React from "react";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof DocCardListType>;

export default function DocCardListWrapper(props: Props): JSX.Element {
  return (
    <>
      <DocCardList {...props} />
    </>
  );
}
