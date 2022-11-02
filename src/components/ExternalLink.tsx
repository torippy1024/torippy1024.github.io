import { ReactNode } from "react";

type ExternalLinkType = {
  href: string;
  children: ReactNode;
}

const ExternalLink = ({href, children}: ExternalLinkType) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:no-underline"
    >
      {children}
    </a>
  );
};

export default ExternalLink;