import React, { useMemo } from "react";

import Link from "@docusaurus/Link";
import type { Props } from "@theme/Footer/Copyright";

export default function FooterCopyright(_: Props): JSX.Element {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <div className="footer__copyright">
      Copyright © {year}. Built with <span style={{ color: "#deabab" }}>&#x2764;&#xfe0e;</span> by <Link to="https://github.com/Silvenga">Silvenga</Link> using <Link to="https://docusaurus.io">Docusaurus</Link>.
    </div>
  );
}
