import ExcitedFox from "../../../../static/theme/excited-fox.webp"
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/NotFound/Content";
import React from "react";
import clsx from "clsx";

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className={clsx("container margin-vert--xl", className)}>
      <div className="row ">
        <div className="col col--6 col--offset-3 flex flex-col items-center">
          <img src={ExcitedFox} alt="Excited fila." className="aspect-square h-96 max-w-max" />
          <Heading as="h1" className="hero__title -mt-9">
            404 Page not found
          </Heading>
          <p className="text-center">
            Down a path unknown, a fox did roam, and with a grin, found joy in the wrong turn home.
          </p>
          <Link to="/">Return home</Link>
        </div>
      </div>
    </main>
  );
}
